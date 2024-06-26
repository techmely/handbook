import { SvgUse } from "@/components/SvgUse";
import TechmelyLogo from "@/public/icon.png";
import type { BaseLayoutProps, DocsLayoutProps } from "fumadocs-ui/layout";
import Image from "next/image";
import { NavChildren } from "./layout.client";
import { docSource } from "@/modules/docs/source";
import { RootToggle } from "fumadocs-ui/components/layout/root-toggle";
import { docsModules } from "@/utils/modules";

export const baseOptions: BaseLayoutProps = {
  githubUrl: "https://github.com/techmely/handbook",
  nav: {
    transparentMode: "top",
    title: (
      <Image
        alt="Techmely"
        src={TechmelyLogo}
        sizes="42px"
        className="size-8"
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

export const docsLayoutOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: docSource.pageTree,
  nav: {},
  sidebar: {
    defaultOpenLevel: 0,
    banner: (
      <RootToggle
        options={docsModules.map((m) => ({
          url: `/docs/${m.param}`,
          icon: (
            <SvgUse
              id={m.iconId}
              className="size-9 shrink-0 rounded-md bg-gradient-to-t from-background/80 p-1.5"
              style={{
                backgroundColor: `hsl(var(--${m.param}-color)/.3)`,
                color: `hsl(var(--${m.param}-color))`,
              }}
            />
          ),
          title: m.name,
          description: m.description,
        }))}
      />
    ),
  },
};
