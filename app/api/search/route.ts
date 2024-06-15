import { createSearchAPI } from "fumadocs-core/search/server";

import { docSource } from "@/modules/docs/source";

export const { GET } = createSearchAPI("advanced", {
  indexes: docSource.getPages().map((page) => ({
    id: page.url,
    url: page.url,
    title: page.data.title,
    structuredData: page.data.exports.structuredData,
  })),
});
