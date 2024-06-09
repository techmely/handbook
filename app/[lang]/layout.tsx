import { RootProvider } from "fumadocs-ui/provider";
import "fumadocs-ui/style.css";
import { pageTree } from "@/app/source";
import { I18nProvider, LanguageSelect } from "fumadocs-ui/i18n";
import { DocsLayout } from "fumadocs-ui/layout";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

const inter = Inter({
  subsets: ["latin"],
});

export default function Layout({
  params,
  children,
}: {
  params: { lang: string };
  children: ReactNode;
}) {
  return (
    <html lang={params.lang} className={inter.className}>
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
              tree={pageTree[params.lang]}
              nav={{
                title: params.lang === "cn" ? "目錄" : "My App",
                url: `/${params.lang}`,
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
