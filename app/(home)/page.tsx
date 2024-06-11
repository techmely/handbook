import { appConfig } from "@/app.config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: appConfig.url,
  },
};

export default function HomePage() {
  return (
    <main className="overflow-x-clip">
      <div className="mx-auto flex max-w-[1400px] flex-col px-3 md:px-6">
        Hero Section Customers Features Community
      </div>
    </main>
  );
}
