import { getCurrentUrl } from "@/utils/pathname";

export function useDomain(): string | undefined {
  const pathname = getCurrentUrl().pathname;
  console.log(pathname);
  if (pathname.includes("/teams/")) return "teams";
  return "okrs-guide";
}
