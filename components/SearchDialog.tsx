"use client";

import { useDomain } from "@/hooks/useDomain";
import { domains } from "@/utils/domain";
import { appEnvs } from "@/utils/environment";
import algoliasearch from "algoliasearch/lite";
import { cva } from "class-variance-authority";
import clsx from "clsx";
import { type SharedProps } from "fumadocs-ui/components/dialog/search";
import SearchAlgoliaDialog from "fumadocs-ui/components/dialog/search-algolia";
import { useEffect, useState, type FC } from "react";

const client = algoliasearch(appEnvs.shared.algolia.appId, appEnvs.shared.algolia.apiKey);
const index = client.initIndex(appEnvs.shared.algolia.index);
const itemVariants = cva(
  "rounded-md border px-2 py-0.5 text-xs font-medium text-muted-foreground transition-colors",
  {
    variants: {
      active: {
        true: "bg-accent text-accent-foreground",
      },
    },
  },
);

const AppSearchDialog: FC<SharedProps> = (props) => {
  const defaultDomain = useDomain() || "teams";
  const [tag, setTag] = useState(defaultDomain);

  useEffect(() => {
    setTag(defaultDomain);
  }, [defaultDomain]);

  return (
    <SearchAlgoliaDialog
      index={index}
      {...props}
      searchOptions={{
        filters: `tag:${tag}`,
      }}
      footer={
        <div className="flex flex-row items-center gap-1">
          {domains.map((domain) => (
            <button
              key={domain.param}
              className={clsx(itemVariants({ active: tag === domain.param }))}
              onClick={() => {
                setTag(domain.param);
              }}
              type="button"
              tabIndex={-1}
            >
              {domain.name}
            </button>
          ))}
          <a
            href="https://algolia.com"
            rel="noreferrer noopener"
            className="ms-auto text-xs text-muted-foreground"
          >
            Search powered by Algolia
          </a>
        </div>
      }
    />
  );
};

export default AppSearchDialog;
