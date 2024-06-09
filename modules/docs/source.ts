import { map } from "@/.map";
import { createSvgUse } from "@/components/SvgUse";
import { languages } from "@/i18n";
import { loader } from "fumadocs-core/source";
import { createMDXSource, defaultSchemas } from "fumadocs-mdx";
import { z } from "zod";
import { svgIcons } from "../ui/constant";

const docsMdxSchema = {
  preview: z.string().optional(),
  toc: z.boolean().default(true),
  index: z.boolean().default(false),
};

export const docSource = loader({
  baseUrl: "/",
  rootDir: "docs",
  languages,
  icon(icon) {
    if (icon && icon in svgIcons) return createSvgUse({ id: icon });
  },
  source: createMDXSource(map, {
    schema: {
      frontmatter: defaultSchemas.frontmatter.extend(docsMdxSchema),
    },
  }),
});
