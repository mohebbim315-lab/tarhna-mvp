import { NextResponse } from "next/server";
import { enhancePrompt } from "@/lib/ai";
export async function POST(req: Request) {
  const body = await req.json();
  if (!body.prompt?.trim()) return NextResponse.json({error:"Prompt is required"}, {status:400});
  return NextResponse.json({ prompt: await enhancePrompt(body.prompt) });
}