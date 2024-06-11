import { RootProvider } from "fumadocs-ui/provider";
import "fumadocs-ui/style.css";
import { appConfig } from "@/app.config";
import { docSource } from "@/modules/docs/source";
import { I18nProvider, LanguageSelect } from "fumadocs-ui/i18n";
import { DocsLayout } from "fumadocs-ui/layout";
import type { ReactNode } from "react";

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
        <I18nProvider
          locale={params.lang}
          translations={{
            en: {
              name: "English",
            },
            vi: {
              name: "Vietnam",
              toc: "Toc",
              search: "Tìm kiếm",
              lastUpdate: "Lần chập nhật cuối",
              previousPage: "Trang trước",
              nextPage: "Trang sau",
            },
            cn: {
              name: "Chinese",
              toc: "目錄",
              search: "搜尋文檔",
              lastUpdate: "最後更新於",
              searchNoResult: "沒有結果",
              previousPage: "上一頁",
              nextPage: "下一頁",
            },
          }}
        >
          <RootProvider>
            <DocsLayout
              tree={docSource.pageTree[params.lang]}
              nav={{
                title: appConfig.name,
                url: `/${params.lang}`,
                githubUrl: appConfig.githubUrl,
                enableSearch: true,
                transparentMode: "top",
              }}
              sidebar={{ footer: <LanguageSelect /> }}
            >
              {children}
            </DocsLayout>
          </RootProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
