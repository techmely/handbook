"use client";

import { RootProvider } from "fumadocs-ui/provider";
import type { FC, PropsWithChildren } from "react";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import dynamic from "next/dynamic";

const SearchDialog = dynamic(() => import("@/components/SearchDialog"));

type Props = { lang: string };

export const AppProvider: FC<PropsWithChildren<Props>> = ({ children, lang }) => {
  return (
    <RootProvider search={{ SearchDialog }}>
      <TooltipProvider>{children}</TooltipProvider>
    </RootProvider>
  );
};
