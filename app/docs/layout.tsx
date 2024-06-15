import "fumadocs-ui/style.css";
import { SvgUse } from "@/components/SvgUse";
import { docSource } from "@/modules/docs/source";
import { docsModules } from "@/utils/modules";
import { RootToggle } from "fumadocs-ui/components/layout/root-toggle";
import { DocsLayout } from "fumadocs-ui/layout";
import type { ReactNode } from "react";
import { baseOptions } from "../layout.config";

export default function Layout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <DocsLayout
      {...baseOptions}
      tree={docSource.pageTree}
      sidebar={{
        defaultOpenLevel: 0,
        banner: (
          <RootToggle
            options={docsModules.map((m) => ({
              url: `/docs/${m.param}`,
              icon: (
                <SvgUse
                  id={m.iconId}
                  className="size-9 rounded-md bg-gradient-to-t from-background/80 p-1.5"
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
      }}
    >
      {children}
    </DocsLayout>
  );
}
