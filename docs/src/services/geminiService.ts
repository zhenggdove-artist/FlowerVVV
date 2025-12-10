import { AnalysisResult } from '../types.ts';

const analysisSchema = {
  type: "object",
  properties: {
    detected: { type: "boolean" },
    box_2d: { type: "array", items: { type: "number" } },
    confidence: { type: "number" },
    label: { type: "string" }
  },
  required: ["detected", "box_2d", "confidence", "label"],
} as const;

// Proxy endpoint (Cloudflare Worker) to avoid exposing API key in front-end
const resolveProxyUrl = () => {
  const fromEnv = (import.meta as any).env?.VITE_PROXY_URL || '';
  const fromWindow = typeof window !== 'undefined' ? (window as any).PROXY_URL : '';
  return fromEnv || fromWindow || '/api/analyze'; // default relative path
};

export const analyzeImage = async (base64Image: string): Promise<AnalysisResult> => {
  try {
    const cleanBase64 = base64Image.replace(/^data:image\/(png|jpeg|jpg);base64,/, "");
    const proxyUrl = resolveProxyUrl();

    const resp = await fetch(proxyUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ image: cleanBase64 }),
    });

    if (!resp.ok) {
      throw new Error(`Proxy error: ${resp.status} ${resp.statusText}`);
    }

    const result = (await resp.json()) as AnalysisResult;
    return result;

  } catch (error) {
    console.error("Gemini Analysis Error (using fallback bounding box):", error);
    // Fallback: Full center box
    return {
      detected: true,
      box_2d: [200, 200, 800, 800],
      confidence: 0.5,
      label: "unknown_structure"
    };
  }
};
