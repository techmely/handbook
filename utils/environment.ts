import { getEnvVar } from "@techmely/utils";

export const appEnvs = {
  client: {},
  server: {},
  shared: {
    algolia: {
      appId: getEnvVar("NEXT_PUBLIC_ALGOLIA_APP_ID"),
      apiKey: getEnvVar("NEXT_PUBLIC_ALGOLIA_API_KEY"),
      index: getEnvVar("NEXT_PUBLIC_ALGOLIA_INDEX"),
    },
  },
};
