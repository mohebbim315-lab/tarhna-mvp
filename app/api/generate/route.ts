import { NextResponse } from "next/server";
import { generateImages } from "@/lib/ai";
import { PRICING } from "@/lib/pricing";

export async function POST(req: Request) {
  const body = await req.json();
  const quality = body.quality === "pro" ? "pro" : "standard";
  if (!body.prompt?.trim()) return NextResponse.json({error:"Prompt is required"}, {status:400});
  // TODO: authenticate user, reserve wallet credits transactionally, create Generation,
  // call provider, save outputs, then settle/refund credits on success/failure.
  const images = await generateImages(body.prompt, quality);
  return NextResponse.json({ images, chargedCredits: PRICING[quality].credits, price: PRICING[quality].toman });
}