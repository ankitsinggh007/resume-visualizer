import OpenAI from "openai";
import { buildExtractionPrompt } from "./buildExtractionPrompt.js";
import {
  EMPTY_EXTRACTION_SCHEMA,
  repairExtractionSchema,
} from "./extractionSchema.js";
import { attemptJsonFix } from "./attemptJsonFix.js";
import { applyFallbacks } from "./fallbacks.js";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function runExtractionEngine(rawText) {
  if (!rawText || rawText.trim().length < 20) {
    return { ...EMPTY_EXTRACTION_SCHEMA };
  }

  const prompt = buildExtractionPrompt(rawText);

  try {
    const response = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0,
      top_p: 0.1,
      max_tokens: 1000,
      response_format: { type: "json_object" },
    });

    let raw = response.choices[0]?.message?.content;
    let parsed;

    try {
      parsed = JSON.parse(raw);
    } catch {
      parsed = attemptJsonFix(raw);
    }

    const repaired = repairExtractionSchema(parsed);
    const final = applyFallbacks(repaired, rawText);
    return final;
  } catch (err) {
    console.error("AI extraction failed (backend):", err);
    return { ...EMPTY_EXTRACTION_SCHEMA };
  }
}
