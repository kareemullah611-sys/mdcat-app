# syntax=docker/dockerfile:1
# Multi-stage build: deps + compile in `build`, lean non-root runtime in `runner`.
FROM node:22-slim AS build
WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1

# Prisma detects OpenSSL while generating both native and Linux runtime engines.
RUN apt-get update && apt-get install -y --no-install-recommends openssl ca-certificates \
    && rm -rf /var/lib/apt/lists/*

COPY package.json package-lock.json ./
RUN npm ci

# .dockerignore excludes storage/, PDFs, tests, and tooling from the image.
COPY . .
RUN npx prisma generate && npm run build

FROM node:22-slim AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=8080

# Runtime deps: poppler for the page-by-page textbook reader, openssl + CA
# bundle for Prisma's Postgres TLS handshake.
RUN apt-get update && apt-get install -y --no-install-recommends \
      poppler-utils \
      openssl \
      ca-certificates \
      gosu \
    && rm -rf /var/lib/apt/lists/*

COPY --chown=node:node --from=build /app/package.json ./package.json
COPY --chown=node:node --from=build /app/node_modules ./node_modules
COPY --chown=node:node --from=build /app/.next ./.next
COPY --chown=node:node --from=build /app/public ./public
COPY --chown=node:node --from=build /app/next.config.ts ./next.config.ts
COPY --chown=node:node --from=build /app/prisma ./prisma
# Keep reviewed maintenance commands available for one-off Railway SSH runs.
COPY --chown=node:node --from=build /app/scripts ./scripts
COPY --chown=node:node --from=build /app/lib ./lib
COPY --chown=root:root docker-entrypoint.sh /usr/local/bin/mdcat-entrypoint
RUN chmod 0755 /usr/local/bin/mdcat-entrypoint

# The entrypoint starts as root only long enough to make the mounted cache root
# writable, then permanently drops to `node` before migrations or app code run.
ENTRYPOINT ["/usr/local/bin/mdcat-entrypoint"]
EXPOSE 8080
CMD ["npm", "run", "start"]
