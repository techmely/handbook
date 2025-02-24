import "./global.css";
import { appConfig } from "@/src/app.config";
import { useDomain } from "@/src/hooks/useDomain";
import { createMetadata } from "@/src/modules/seo/metadata";
import clsx from "clsx";
import { RootProvider } from "fumadocs-ui/provider";
import type { Viewport } from "next";
import type { ReactNode } from "react";

export const metadata = createMetadata({
  title: {
    template: "%s | Techmely",
    default: "Techmely",
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
  const domain = useDomain();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={clsx(domain, "flex min-h-screen flex-col")}>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
