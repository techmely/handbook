import { appConfig } from "@/src/app.config";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    template: "%s - Techmely Blog",
    default: "Techmely Blog",
    absolute: "Techmely Blog",
  },
  description: appConfig.blog.description,
  openGraph: {
    images: "/thumbnail.webp",
    title: {
      template: "%s - Techmely Blog",
      absolute: "Techmely Blog",
      default: "Techmely Blog",
    },
    description: appConfig.blog.description,
  },
};

export default function BlogLayout({ children }: { children: ReactNode }) {
  return <div className="container">{children}</div>;
}
