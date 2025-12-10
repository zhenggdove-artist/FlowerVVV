import { GoogleGenAI, Type, Schema } from "@google/genai";
import { AnalysisResult } from '../types';

// Initialize Gemini Client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const analysisSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    detected: {
      type: Type.BOOLEAN,
      description: "Whether a concrete block, cement wall, stone structure, or ruin is clearly visible.",
    },
    box_2d: {
      type: Type.ARRAY,
      items: { type: Type.NUMBER },
      description: "The tightest bounding box [ymin, xmin, ymax, xmax] (0-1000) containing ONLY the concrete object. Exclude sky, ground, or other background elements.",
    },
    confidence: {
      type: Type.NUMBER,
      description: "Confidence score between 0 and 1.",
    },
    label: {
      type: Type.STRING,
      description: "Short label like 'concrete block', 'cracked wall'.",
    },
  },
  required: ["detected", "box_2d", "confidence", "label"],
};

export const analyzeImage = async (base64Image: string): Promise<AnalysisResult> => {
  try {
    // Remove header if present
    const cleanBase64 = base64Image.replace(/^data:image\/(png|jpeg|jpg);base64,/, "");

    const model = "gemini-2.5-flash";
    
    const response = await ai.models.generateContent({
      model: model,
      contents: {
        parts: [
          {
            inlineData: {
              mimeType: "image/jpeg",
              data: cleanBase64,
            },
          },
          {
            text: "Locate the main CONCRETE or STONE object in this image. I need a bounding box that perfectly frames the concrete structure so I can apply visual effects to it. Ignore people, sky, or trees. Focus on the hard surface.",
          },
        ],
      },
      config: {
        responseMimeType: "application/json",
        responseSchema: analysisSchema,
      },
    });

    const text = response.text;
    if (!text) throw new Error("No response from Gemini");

    const result = JSON.parse(text) as AnalysisResult;
    return result;

  } catch (error) {
    console.error("Gemini Analysis Error:", error);
    // Fallback: Full center box
    return {
      detected: true,
      box_2d: [200, 200, 800, 800],
      confidence: 0.5,
      label: "unknown_structure"
    };
  }
};