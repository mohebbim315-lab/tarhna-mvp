export async function enhancePrompt(prompt: string) {
  // Replace this mock with your selected LLM provider.
  return `Professional image-generation prompt: ${prompt}. Photorealistic, coherent composition, natural lighting, detailed textures, accurate anatomy, premium visual quality.`;
}

export async function generateImages(prompt: string, quality: "standard" | "pro") {
  // MVP mock provider. Replace with a real image API adapter.
  const seed = encodeURIComponent(prompt.slice(0, 40));
  return [
    `https://placehold.co/1024x1024/png?text=Tarhna+1+${seed}`,
    `https://placehold.co/1024x1024/png?text=Tarhna+2+${seed}`
  ];
}