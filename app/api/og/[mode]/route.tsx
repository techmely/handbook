import { type DocsModule, docsModules } from "@/utils/modules";
import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

const foreground = "hsl(0 0% 98%)";
const mutedForeground = "hsl(0 0% 63.9%)";
const background = "rgba(10, 10, 10)";
const fontUrl = new URL("./BeVietnamPro-Bold.ttf", import.meta.url);

const bold = fetch(fontUrl).then((res) => res.arrayBuffer());

export async function GET(
  request: NextRequest,
  { params }: { params: { mode: string } },
): Promise<ImageResponse> {
  const { searchParams } = request.nextUrl;
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return new ImageResponse(
    OG({
      title: title ?? "Techmely",
      description: description ?? "The Techmely's Documentation ",
      mode: docsModules.find((m) => m.param === params.mode) ?? docsModules[0],
    }),
    {
      width: 1200,
      height: 630,
      fonts: [{ name: "Be VietNam Pro", data: await bold, weight: 700 }],
    },
  );
}

function OG({
  title,
  description,
  mode,
}: {
  mode: DocsModule;
  title: string;
  description: string;
}): React.ReactElement {
  return (
    <div
      style={{
        color: foreground,
        background,
      }}
      tw="flex flex-col w-full h-full p-12"
    >
      <div
        style={{
          background: "linear-gradient(to right bottom, rgb(150, 200, 255), rgb(200, 100, 255))",
        }}
        tw="flex flex-col justify-center rounded-2xl p-4 shadow-2xl shadow-purple-600"
      >
        <div
          tw="flex flex-col rounded-2xl p-12"
          style={{
            border: "1px rgba(156,163,175,0.3)",
            background,
          }}
        >
          <p tw="font-bold text-6xl">{title}</p>
          <p
            tw="text-4xl"
            style={{
              color: mutedForeground,
            }}
          >
            {description}
          </p>
        </div>
      </div>

      <div tw="flex flex-row items-center mt-auto p-4">
        {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
        <svg
          fill="currentColor"
          height="60"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="60"
        >
          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
          <path d="M5 3v4" />
          <path d="M19 17v4" />
          <path d="M3 5h4" />
          <path d="M17 19h4" />
        </svg>
        <p tw="font-bold ml-4 text-4xl">{mode.name}</p>
      </div>
    </div>
  );
}
