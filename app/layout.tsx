import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import type { ReactNode } from "react";
import { Body } from "./layout.client";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Body>
        <RootProvider>{children}</RootProvider>
      </Body>
    </html>
  );
}
