import { useDomain } from "@/hooks/useDomain";
import { domains } from "@/utils/domain";
import { cva } from "class-variance-authority";
import clsx from "clsx";
import Link from "next/link";
import type { FC, PropsWithChildren } from "react";

export const Body: FC<PropsWithChildren> = ({ children }) => {
  const mode = useDomain();

  return <body className={clsx(mode, "h-screen")}>{children}</body>;
};

const itemVariants = cva("rounded-md px-2 py-1 transition-colors hover:text-accent-foreground", {
  variants: {
    active: {
      true: "bg-accent text-accent-foreground",
    },
  },
});

export const NavChildren = () => {
  const domain = useDomain();

  return (
    <div className="rounded-md border bg-secondary/50 p-1 text-sm text-muted-foreground max-md:absolute max-md:left-1/2 max-md:-translate-x-1/2">
      {domains.map((d) => (
        <Link
          key={d.param}
          href={`/docs/${d.param}`}
          className={clsx(itemVariants({ active: domain === d.param }))}
        >
          {d.name}
        </Link>
      ))}
    </div>
  );
};
