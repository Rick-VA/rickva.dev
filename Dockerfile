FROM node:current-bookworm AS builder

WORKDIR /build

COPY package*.json ./

RUN npm ci

COPY . .

ENV COMPATIBILITY_DATE=2025-02-01

RUN npm run build

FROM denoland/deno:distroless-2.1.9 AS production

WORKDIR /app

# Copy both server and client assets
COPY --from=builder /build/.output ./out

CMD ["--allow-env", "--allow-net", "--allow-read", "out/server/index.mjs"]
