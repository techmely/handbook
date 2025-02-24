import { appConfig } from "@/src/app.config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: `${appConfig.url}/blog`,
  },
};

export default function BlogPage() {
  return (
    <main className="overflow-x-clip">
      <div className="mx-auto flex max-w-[1400px] flex-col px-3 md:px-6">Blog Page</div>
    </main>
  );
}
