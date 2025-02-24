import { appConfig } from "@/src/app.config";
import { blogAuthors } from "@/src/modules/blogs/constant";
import { blogSource } from "@/src/modules/blogs/source";
import { DocsBody } from "fumadocs-ui/page";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export default function BlogPage({ params }: { params: { slug: string } }) {
  const page = blogSource.getPage([params.slug]);

  if (!page) notFound();
  const Content = page.data.exports.default;

  return (
    <DocsBody>
      <Content />
    </DocsBody>
  );
}

export function generateStaticParams() {
  return blogSource.getPages().map((blog) => ({
    slug: blog.slugs[0],
  }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const page = blogSource.getPage([params.slug]);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
    alternates: {
      canonical: `${appConfig.url}/blog/${params.slug}`,
    },
    openGraph: {
      type: "article",
      tags: page.data.tags,
      authors: page.data.authors.map((author) => blogAuthors[author].name),
      title: page.data.title,
      description: page.data.description,
      images: page.data.image ?? "/thumbnail.png",
    },
  };
}
