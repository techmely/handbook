import "fumadocs-ui/style.css";
import { appConfig } from "@/app.config";
import { docSource } from "@/modules/docs/source";
import { DocsLayout } from "fumadocs-ui/layout";
import type { ReactNode } from "react";
import { AppProvider } from "../provider";

export default function Layout({
  params,
  children,
}: {
  params: { lang: string };
  children: ReactNode;
}) {
  return (
    <html lang={params.lang}>
      <body>
        <AppProvider lang={params.lang}>
          <DocsLayout
            tree={docSource.pageTree[params.lang]}
            nav={{
              title: appConfig.name,
              url: `/${params.lang}`,
              enableSearch: true,
              transparentMode: "top",
            }}
          >
            {children}
          </DocsLayout>
        </AppProvider>
      </body>
    </html>
  );
}
