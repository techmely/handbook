export const appEnvs = {
  client: {},
  server: {},
  shared: {
    algolia: {
      appId: process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || "",
      apiKey: process.env.NEXT_PUBLIC_ALGOLIA_API_KEY || "",
      index: process.env.NEXT_PUBLIC_ALGOLIA_INDEX || "",
    },
  },
};
