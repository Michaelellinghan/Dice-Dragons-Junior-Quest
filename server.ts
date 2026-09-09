import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import { createServer as createViteServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Middleware for parsing JSON requests with higher limit for base64 images
app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ extended: true, limit: '20mb' }));

// Lazy GoogleGenAI client initialization
let genaiClient: GoogleGenAI | null = null;
function getGenAI(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return null;
  }
  if (!genaiClient) {
    genaiClient = new GoogleGenAI({ apiKey });
  }
  return genaiClient;
}

// ==========================================
// API Routes
// ==========================================

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', hasGeminiKey: Boolean(process.env.GEMINI_API_KEY) });
});

// Generate Image Endpoint
app.post('/api/generate-image', async (req, res) => {
  try {
    const { prompt, aspectRatio = '1:1', imageSize = '1K', style = 'storybook fantasy' } = req.body;

    if (!prompt || typeof prompt !== 'string') {
      res.status(400).json({ error: 'Prompt is required' });
      return;
    }

    const ai = getGenAI();
    if (!ai) {
      res.status(400).json({
        error: 'GEMINI_API_KEY is not configured in the environment. Please add it via AI Studio Settings.',
        fallbackNotice: true,
      });
      return;
    }

    const enhancedPrompt = `${prompt}, ${style} art style, charming tabletop RPG aesthetic, warm lighting, vibrant high-detail fantasy illustration suitable for young adventurers.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.1-flash-image',
      contents: {
        parts: [{ text: enhancedPrompt }],
      },
      config: {
        imageConfig: {
          aspectRatio: aspectRatio as any,
          imageSize: imageSize as any,
        },
      },
    });

    let imageUrl: string | null = null;
    let caption: string | null = null;

    if (response.candidates?.[0]?.content?.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          imageUrl = `data:${part.inlineData.mimeType || 'image/png'};base64,${part.inlineData.data}`;
        } else if (part.text) {
          caption = part.text;
        }
      }
    }

    if (!imageUrl) {
      res.status(500).json({ error: 'The AI model completed without generating an image part.', caption });
      return;
    }

    res.json({ imageUrl, caption, prompt });
  } catch (error: any) {
    console.error('Error generating image with Gemini:', error);
    res.status(500).json({
      error: error.message || 'Failed to generate image',
      details: error.toString(),
    });
  }
});

// Edit Image Endpoint
app.post('/api/edit-image', async (req, res) => {
  try {
    const { prompt, imageBase64, mimeType = 'image/png' } = req.body;

    if (!prompt || typeof prompt !== 'string') {
      res.status(400).json({ error: 'Prompt instruction is required' });
      return;
    }

    if (!imageBase64 || typeof imageBase64 !== 'string') {
      res.status(400).json({ error: 'Base64 image data is required' });
      return;
    }

    const ai = getGenAI();
    if (!ai) {
      res.status(400).json({
        error: 'GEMINI_API_KEY is not configured in the environment. Please add it via AI Studio Settings.',
        fallbackNotice: true,
      });
      return;
    }

    // Clean base64 header if included
    const cleanBase64 = imageBase64.replace(/^data:image\/[a-z]+;base64,/, '');

    const response = await ai.models.generateContent({
      model: 'gemini-3.1-flash-image',
      contents: {
        parts: [
          {
            inlineData: {
              data: cleanBase64,
              mimeType,
            },
          },
          {
            text: `Edit instruction: ${prompt}. Keep the charming storybook fantasy aesthetic, warm magical lighting, and child-friendly design.`,
          },
        ],
      },
    });

    let imageUrl: string | null = null;
    let caption: string | null = null;

    if (response.candidates?.[0]?.content?.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          imageUrl = `data:${part.inlineData.mimeType || 'image/png'};base64,${part.inlineData.data}`;
        } else if (part.text) {
          caption = part.text;
        }
      }
    }

    if (!imageUrl) {
      res.status(500).json({ error: 'The AI model completed without returning an edited image.', caption });
      return;
    }

    res.json({ imageUrl, caption, prompt });
  } catch (error: any) {
    console.error('Error editing image with Gemini:', error);
    res.status(500).json({
      error: error.message || 'Failed to edit image',
      details: error.toString(),
    });
  }
});

// ==========================================
// Vite Middleware / Static Serving
// ==========================================

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
