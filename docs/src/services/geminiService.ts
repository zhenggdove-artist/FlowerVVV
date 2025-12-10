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

const DEFAULT_PROXY = 'https://royal-base-184.wufu104.workers.dev';

// 取得代理網址：query (?proxy=) > localStorage(PROXY_URL) > window.PROXY_URL > env > DEFAULT_PROXY
const resolveProxyUrl = () => {
  const isBrowser = typeof window !== 'undefined';
  let queryProxy = '';
  if (isBrowser) {
    const qp = new URLSearchParams(window.location.search);
    queryProxy = qp.get('proxy') || qp.get('api') || '';
    if (queryProxy) {
      window.localStorage.setItem('PROXY_URL', queryProxy);
    }
  }
  const stored = isBrowser ? window.localStorage.getItem('PROXY_URL') || '' : '';
  const fromWindow = isBrowser ? (window as any).PROXY_URL || '' : '';
  const fromEnv = (import.meta as any).env?.VITE_PROXY_URL || '';
  return queryProxy || stored || fromWindow || fromEnv || DEFAULT_PROXY;
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
