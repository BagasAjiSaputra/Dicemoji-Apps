import { NextResponse } from "next/server";

export async function GET(
  _req: Request,
  { params }: {   params : Promise<{seed: string;}>; }
) {
  const { seed } = await params;

  const dicebearUrl = `https://api.dicebear.com/9.x/fun-emoji/svg?seed=${seed}`;
  const response = await fetch(dicebearUrl);

  const svg = await response.text();

  return new NextResponse(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Content-Disposition": `attachment; filename="dicemoji-${seed}.svg"`,
    },
  });
}
