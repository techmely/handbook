import "./global.css";
import { appConfig } from "@/app.config";
import { createMetadata } from "@/modules/seo/metadata";
import { RootProvider } from "fumadocs-ui/provider";
import type { Viewport } from "next";
import type { ReactNode } from "react";
import { Body } from "./layout.client";

export const metadata = createMetadata({
  title: {
    template: "%s | Techmely Handbook",
    default: "Techmely Handbook",
  },
  description: appConfig.description,
  metadataBase: new URL(appConfig.url),
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0A" },
    { media: "(prefers-color-scheme: light)", color: "#fff" },
  ],
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Body>
        <RootProvider>{children}</RootProvider>
      </Body>
    </html>
  );
}
