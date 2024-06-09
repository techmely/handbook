import { FontaineTransform } from "fontaine";
import createMDX from "fumadocs-mdx/config";

const withMDX = createMDX();

const fontTaineOptions = {
  fallbacks: ["BlinkMacSystemFont", "Segoe UI", "Helvetica Neue", "Arial", "Noto Sans"],
  resolvePath: (id) => `/public/fonts/${id}`,
  overrideName: () => "Be VietNam Pro Techmely",
};

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  webpack(config) {
    config.plugins = config.plugins || [];
    config.plugins.push(FontaineTransform.webpack(fontTaineOptions));
    return config;
  },
};

export default withMDX(config);
