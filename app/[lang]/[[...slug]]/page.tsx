import { docSource } from "@/modules/docs/source";
import { DocsBody, DocsPage } from "fumadocs-ui/page";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: { lang: string; slug?: string[] };
}) {
  const page = docSource.getPage(params.slug, params.lang);

  if (page == null) {
    notFound();
  }

  const MDX = page.data.exports.default;

  return (
    <DocsPage toc={page.data.exports.toc}>
      <DocsBody>
        <h1>{page.data.title}</h1>
        <MDX />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return docSource.getLanguages().flatMap(({ language, pages }) =>
    pages.map((page) => ({
      lang: language,
      slug: page.slugs,
    })),
  );
}

export function generateMetadata({
  params,
}: {
  params: { lang: string; slug?: string[] };
}) {
  const page = docSource.getPage(params.slug, params.lang);

  if (page == null) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  } satisfies Metadata;
}
