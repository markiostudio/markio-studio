import { NextResponse } from "next/server";
import {
  generateLandingPage,
  LandingPageGenerationError,
} from "@/lib/ai/landing-page";
import { parseBusinessBrain, type BusinessBrain } from "@/lib/dashboard/business-brain";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const businessBrainRaw =
    typeof body === "object" &&
    body !== null &&
    "businessBrain" in body
      ? (body as { businessBrain: unknown }).businessBrain
      : null;

  if (!businessBrainRaw) {
    return NextResponse.json({ error: "businessBrain is required." }, { status: 400 });
  }

  let businessBrain: BusinessBrain;

  try {
    businessBrain = parseBusinessBrain(businessBrainRaw);
  } catch {
    return NextResponse.json({ error: "Invalid businessBrain object." }, { status: 400 });
  }

  const businessName = businessBrain.business.name?.trim();
  if (!businessName) {
    return NextResponse.json(
      { error: "business.name is required in businessBrain." },
      { status: 400 }
    );
  }

  try {
    const enrichedBrain = await generateLandingPage(businessBrain);
    return NextResponse.json(enrichedBrain);
  } catch (error) {
    if (error instanceof LandingPageGenerationError) {
      const status = error.message.includes("OPENAI_API_KEY") ? 500 : 502;
      return NextResponse.json({ error: error.message }, { status });
    }

    const message =
      error instanceof Error ? error.message : "Failed to generate landing page.";

    return NextResponse.json({ error: message }, { status: 502 });
  }
}
