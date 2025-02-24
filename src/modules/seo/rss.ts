import { appConfig } from "@/src/app.config";
import RSS from "rss";
import { blogSource } from "../blogs/source";

export function generateRSSFeed(): string {
  const feed = new RSS({
    title: "Techmely",
    description: "Welcome to Techmely",
    site_url: appConfig.url,
    feed_url: `${appConfig.url}/rss.xml`,
    image_url: `${appConfig.url}/thumbnail.png`,
  });

  for (const post of blogSource.getPages()) {
    feed.item({
      title: post.data.title,
      description: post.data.description ?? "No Description",
      url: `${appConfig.url}${post.url}`,
      date: post.data.date,
      author: post.data.authors.join(", "),
      categories: post.data.tags,
    });
  }

  return feed.xml();
}
