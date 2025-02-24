import { appConfig } from "@/src/app.config";
import type { Metadata } from "next";
import Link from "next/link";
import { TargetIcon, UsersIcon } from "lucide-react";

export const metadata: Metadata = {
  alternates: {
    canonical: appConfig.url,
  },
};

export default function HomePage() {
  return (
    <main className="flex flex-row items-center gap-6 px-4 mx-auto size-full max-w-container">
      <div className="flex flex-col w-full gap-6 py-8 mx-auto">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="relative p-4 overflow-hidden border rounded-lg bg-background/50">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <TargetIcon
                  className="p-1 rounded-md size-6 shrink-0 bg-gradient-to-t from-background/80"
                  style={{
                    backgroundColor: "hsl(var(--okrs-guide-color)/.3)",
                    color: "hsl(var(--okrs-guide-color))",
                  }}
                />
                <h2 className="text-lg font-medium">OKRs Guide</h2>
              </div>
              <p className="mb-4 text-sm text-muted-foreground">
                Comprehensive guide to understand and implement OKRs effectively in your
                organization
              </p>
              <Link
                href="/docs/okrs-guide"
                className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white aria-disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 dark:aria-disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="relative p-4 overflow-hidden border rounded-lg bg-background/50">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <UsersIcon
                  className="p-1 rounded-md size-6 shrink-0 bg-gradient-to-t from-background/80"
                  style={{
                    backgroundColor: "hsl(var(--teams-color)/.3)",
                    color: "hsl(var(--teams-color))",
                  }}
                />
                <h2 className="text-lg font-medium">About Us</h2>
              </div>
              <p className="mb-4 text-sm text-muted-foreground">
                Learn more about our team, mission and how we can help your business grow
              </p>
              <Link
                href="/docs/teams"
                className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white aria-disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 dark:aria-disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
