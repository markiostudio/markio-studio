import { NextResponse } from "next/server";
import {
  BusinessBrainGenerationError,
  generateBusinessBrain,
} from "@/lib/ai/business-brain";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const prompt =
    typeof body === "object" &&
    body !== null &&
    "prompt" in body &&
    typeof (body as { prompt: unknown }).prompt === "string"
      ? (body as { prompt: string }).prompt.trim()
      : "";

  if (!prompt) {
    return NextResponse.json({ error: "Prompt is required." }, { status: 400 });
  }

  try {
    const brain = await generateBusinessBrain(prompt);
    return NextResponse.json(brain);
  } catch (error) {
    if (error instanceof BusinessBrainGenerationError) {
      const status = error.message.includes("OPENAI_API_KEY") ? 500 : 502;
      return NextResponse.json({ error: error.message }, { status });
    }

    const message =
      error instanceof Error ? error.message : "Failed to generate business brain.";

    return NextResponse.json({ error: message }, { status: 502 });
  }
}
