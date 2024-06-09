ARG PORT=5000
ARG NEXT_PUBLIC_APP_VERSION
ARG NODE_ENV

FROM oven/bun as base

USER bun

WORKDIR /app/handbook

COPY --chown=bun . .

RUN bun install --production --frozen-lockfile

FROM oven/bun

USER bun

WORKDIR /app/handbook

ENV NEXT_TELEMETRY_DISABLED=true
ENV PORT=$PORT
ENV NEXT_PUBLIC_APP_VERSION=$NEXT_TELEMETRY_DISABLED
ENV NODE_ENV=$NODE_ENV

COPY --from=base --chown=bun /app/handbook/node_modules ./node_modules
# Copying the production-ready application code, so it's one of few required artifacts
COPY --from=base --chown=bun /app/handbook/.next ./.next
COPY --from=base --chown=bun /app/handbook/next.config.js ./next.config.js
COPY --from=base --chown=bun /app/handbook/next-sitemap.config.js ./next-sitemap.config.js
COPY --from=base --chown=bun /app/handbook/public ./public
COPY --from=base --chown=bun /app/handbook/package.json ./package.json

EXPOSE 5000

CMD ["bun", "run", "start"]