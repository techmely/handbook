import { Layout } from "fumadocs-ui/layout";
import type { ReactNode } from "react";
import { baseOptions } from "../layout.config";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return <Layout {...baseOptions}>{children}</Layout>;
}
