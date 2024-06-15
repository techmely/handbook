import { SvgUse } from "@/components/SvgUse";
import { docSource } from "@/modules/docs/source";
import { DocsBody, DocsPage } from "fumadocs-ui/page";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

// @ts-expect-error
function FooterPage({ path }) {
  return (
    <a href={`https://github.com/techmely/handbook/blob/main/${path}`}>
      <SvgUse id="edit" className="size-3" />
      Edit on github
    </a>
  );
}

export default async function Page({
  params,
}: {
  params: { slug: string[] };
}) {
  const page = docSource.getPage(params.slug);

  if (page == null) {
    notFound();
  }
  const pagePath = `content/docs/${page.file.path}`;
  const MDX = page.data.exports.default;

  return (
    <DocsPage
      toc={page.data.exports.toc}
      lastUpdate={page.data.exports.lastModified}
      tableOfContent={{
        enabled: page.data.toc,
        footer: <FooterPage path={pagePath} />,
      }}
    >
      <DocsBody>
        <h1>{page.data.title}</h1>
        <MDX />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return docSource.getPages().map((page) => ({
    slug: page.slugs,
  }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string[] };
}) {
  const page = docSource.getPage(params.slug);

  if (page == null) notFound();
  const description = page.data.description ?? "A page from the Techmely Handbook";

  const imageParams = new URLSearchParams();
  imageParams.set("title", page.data.title);
  imageParams.set("description", description);

  const image = {
    alt: "Banner",
    url: `/api/og/${params.slug[0]}?${imageParams.toString()}`,
    width: 1200,
    height: 630,
  };

  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      url: `/docs/${params.slug.join("/")}`,
      images: image,
    },
    twitter: {
      images: image,
    },
  } satisfies Metadata;
}
