import { createI18nSearchAPI } from "fumadocs-core/search/server";

import { languages } from "@/i18n";
import { docSource } from "@/modules/docs/source";

export const { GET } = createI18nSearchAPI("advanced", {
  indexes: languages.map((lang) => {
    return {
      language: lang,
      indexes: docSource.getPages(lang).map((page) => ({
        id: page.url,
        url: page.url,
        title: page.data.title,
        structuredData: page.data.exports.structuredData,
      })),
    };
  }),
});
