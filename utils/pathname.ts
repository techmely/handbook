import { staticGenerationAsyncStorage } from "next/dist/client/components/static-generation-async-storage.external";

export function getCurrentUrl() {
  const expression = "getCurrentUrl";
  const store = staticGenerationAsyncStorage.getStore();

  if (!store) {
    throw new Error(`Invariant: static generation store missing in ${expression}`);
  }

  const { incrementalCache, urlPathname } = store;
  if (!incrementalCache) {
    throw new Error(`Invariant: incremental cache missing in ${expression}`);
  }

  const { requestHeaders } = incrementalCache;

  const base = `${requestHeaders["x-forwarded-proto"]}://${requestHeaders.host}`;

  return new URL(urlPathname, base);
}
