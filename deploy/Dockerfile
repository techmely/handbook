FROM oven/bun as base

USER bun

WORKDIR /app/handbook

COPY --chown=bun . .

RUN bun install --production --frozen-lockfile

FROM oven/bun

USER bun

WORKDIR /app/handbook

COPY --from=base --chown=bun /app/handbook/node_modules ./node_modules
# Copying the production-ready application code, so it's one of few required artifacts
COPY --from=base --chown=bun /app/handbook/.next ./.next
COPY --from=base --chown=bun /app/handbook/next.config.mjs ./next.config.mjs
COPY --from=base --chown=bun /app/handbook/next-sitemap.config.js ./next-sitemap.config.js
COPY --from=base --chown=bun /app/handbook/public ./public
COPY --from=base --chown=bun /app/handbook/package.json ./package.json

EXPOSE 5000

CMD ["bun", "run", "start"]