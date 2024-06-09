import { map } from "@/.map";
import { loader } from "fumadocs-core/source";
import { createMDXSource, defaultSchemas } from "fumadocs-mdx";
import { z } from 'zod';


const blogMdxSchema = {
  authors: z.array(z.string()).default([]),
  tags: z.array(z.string()).default([]),
  image: z.string().optional(),
  date: z.date().or(
    z
      .string()
      .transform((s) => new Date(s))
      .default(new Date().toISOString()),
  ),
}


export const blogSource = loader({
  baseUrl: '/blog',
  rootDir: 'blog',
  source: createMDXSource(map, {
    schema: {
      frontmatter: defaultSchemas.frontmatter.extend(blogMdxSchema),
    },
  }),
});