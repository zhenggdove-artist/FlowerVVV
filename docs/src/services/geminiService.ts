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

// 固定代理網址，避免環境或快取導致沒發出請求
const PROXY_URL = 'https://royal-base-184.wufu104.workers.dev';

export const analyzeImage = async (base64Image: string): Promise<AnalysisResult> => {
  try {
    const cleanBase64 = base64Image.replace(/^data:image\/(png|jpeg|jpg);base64,/, "");

    const resp = await fetch(PROXY_URL, {
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
