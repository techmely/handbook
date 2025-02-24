import { appConfig } from "@/src/app.config";
import type { Metadata } from "next";

export function createMetadata(override: Metadata): Metadata {
  return {
    ...override,
    openGraph: {
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      url: appConfig.url,
      images: "/thumbnail.png",
      siteName: appConfig.name,
      ...override.openGraph,
    },
    twitter: {
      card: "summary_large_image",
      creator: "@techmely",
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      images: "/thumbnail.png",
      ...override.twitter,
    },
  };
}
