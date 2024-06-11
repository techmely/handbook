import { SvgUse } from "@/components/SvgUse";
import TechmelyLogo from "@/public/favicons/apple-touch-icon.webp";
import type { BaseLayoutProps } from "fumadocs-ui/layout";
import Image from "next/image";
import { NavChildren } from "./layout.client";

export const baseOptions: BaseLayoutProps = {
  githubUrl: "https://github.com/techmely/handbook",
  nav: {
    transparentMode: "top",
    title: (
      <Image
        alt="Techmely"
        src={TechmelyLogo}
        sizes="42px"
        className="size-4"
        aria-label="Techmely Handbook"
      />
    ),
    children: <NavChildren />,
  },
  links: [
    {
      icon: <SvgUse id="note-stack-outline" />,
      text: "Blog",
      url: "/blog",
      active: "nested-url",
    },
  ],
};
