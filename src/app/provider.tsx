"use client";

import { TooltipProvider } from "@radix-ui/react-tooltip";
import { RootProvider } from "fumadocs-ui/provider";
import dynamic from "next/dynamic";
import type { FC, PropsWithChildren } from "react";

const SearchDialog = dynamic(() => import("@/src/components/SearchDialog"));

export const AppProvider: FC<PropsWithChildren<any>> = ({ children }) => {
  return (
    <RootProvider search={{ SearchDialog }}>
      <TooltipProvider>{children}</TooltipProvider>
    </RootProvider>
  );
};
