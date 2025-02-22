import { SvgUse } from "@/components/SvgUse";
import { type PageDocs, docSource } from "@/modules/docs/source";
import { Card, Cards } from "fumadocs-ui/components/card";
import { RollButton } from "fumadocs-ui/components/roll-button";
import { DocsBody, DocsPage } from "fumadocs-ui/page";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface Param {
  slug: string[];
}

export const dynamicParams = false;

// @ts-expect-error
function FooterPage({ path }) {
  return (
    <a href={`https://github.com/techmely/handbook/blob/main/${path}`}>
      <SvgUse id="edit" className="size-3" />
      Edit on github
    </a>
  );
}

export default async function Page({ params }: { params: Param }) {
  const page = docSource.getPage(params.slug);

  if (page == null) {
    notFound();
  }
  const pagePath = `content/docs/${page.file.path}`;

  return (
    <DocsPage
      toc={page.data.exports.toc}
      lastUpdate={page.data.exports.lastModified}
      full={page.data.full}
      tableOfContent={{
        footer: <FooterPage path={pagePath} />,
      }}
    >
      <RollButton />
      <DocsBody>
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">{page.data.title}</h1>
        <p className="mb-8 text-lg text-muted-foreground">{page.data.description}</p>
        {page.data.index ? <Category page={page} /> : <page.data.exports.default />}
      </DocsBody>
    </DocsPage>
  );
}

function Category({ page }: { page: PageDocs }): React.ReactElement {
  const filtered = docSource
    .getPages()
    .filter((item) => item.file.dirname === page.file.dirname && item.file.name !== "index");

  return (
    <Cards>
      {filtered.map((item) => (
        <Card
          key={item.url}
          title={item.data.title}
          description={item.data.description ?? "No Description"}
          href={item.url}
        />
      ))}
    </Cards>
  );
}

export async function generateStaticParams() {
  return docSource.getPages().map((page) => ({
    slug: page.slugs,
  }));
}

export function generateMetadata({ params }: { params: { slug: string[] } }) {
  const page = docSource.getPage(params.slug);

  if (page == null) notFound();
  const description = page.data.description ?? "A page from the Techmely";

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
