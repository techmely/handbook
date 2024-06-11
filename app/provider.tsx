"use client";

import { RootProvider } from "fumadocs-ui/provider";
import type { FC, PropsWithChildren } from "react";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import dynamic from "next/dynamic";
import { I18nProvider } from "fumadocs-ui/i18n";

const SearchDialog = dynamic(() => import("@/components/SearchDialog"));

type Props = { lang: string };

export const AppProvider: FC<PropsWithChildren<Props>> = ({ children, lang }) => {
  return (
    <I18nProvider
      locale={lang}
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
      <RootProvider search={{ SearchDialog }}>
        <TooltipProvider>{children}</TooltipProvider>
      </RootProvider>
    </I18nProvider>
  );
};
