# syntax=docker/dockerfile:1
# Multi-stage build: deps + compile in `build`, lean non-root runtime in `runner`.
FROM node:22-slim AS build
WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1

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
    && rm -rf /var/lib/apt/lists/*

COPY --from=build /app/package.json ./package.json
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/next.config.ts ./next.config.ts
COPY --from=build /app/prisma ./prisma

# Non-root runtime. Source PDFs on the shared volume are read-only 755/644, so
# `node` can read them; the render cache lives in TEXTBOOK_CACHE_DIR (writable).
USER node
EXPOSE 8080
CMD ["npm", "run", "start"]