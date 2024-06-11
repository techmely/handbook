import { blogSource } from "@/modules/blogs/source";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

export default function BlogLayout({
  params,
  children,
}: {
  params: { slug: string };
  children: ReactNode;
}) {
  const page = blogSource.getPage([params.slug]);

  if (!page) notFound();

  return (
    <main itemScope itemType="http://schema.org/Article">
      <h1 className="mb-2 text-3xl font-bold leading-normal" itemProp="name">
        {page.data.title}
      </h1>
      {children}
    </main>
  );
}
