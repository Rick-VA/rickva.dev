FROM oven/bun:1.1.34 AS builder

WORKDIR /build

COPY package*.json bun.lockb ./

RUN bun install --production

COPY . .

ENV COMPATIBILITY_DATE=2024-11-13

RUN bun run build

FROM oven/bun:1.1.34-distroless AS production

WORKDIR /app

# Copy both server and client assets
COPY --from=builder /build/.output ./out

CMD ["out/server/index.mjs"]
