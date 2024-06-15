import { FontaineTransform } from "fontaine";
import createMDX from "fumadocs-mdx/config";
import createBundleAnalyzer from "@next/bundle-analyzer";

const withAnalyzer = createBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const withMDX = createMDX({
  rootContentPath: "./content",
  buildSearchIndex: {
    filter: (path) => {
      return path.startsWith("docs");
    },
  },
});

const fontTaineOptions = {
  fallbacks: ["BlinkMacSystemFont", "Segoe UI", "Helvetica Neue", "Arial", "Noto Sans"],
  resolvePath: (id) => `/public/fonts/${id}`,
  overrideName: () => "Be VietNam Pro Techmely",
};

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "mdx"],
  images: {
    unoptimized: true,
  },
  webpack(config) {
    config.plugins = config.plugins || [];
    config.plugins.push(FontaineTransform.webpack(fontTaineOptions));
    return config;
  },
  experimental: {
    webpackBuildWorker: true,
  },
};

export default withAnalyzer(withMDX(config));
