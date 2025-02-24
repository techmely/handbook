import { generateRSSFeed } from "@/src/modules/seo/rss";
import { NextResponse } from "next/server";

export const dynamic = "force-static";

export function GET() {
  return new NextResponse(generateRSSFeed(), {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
