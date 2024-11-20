FROM oven/bun:1.1.36 AS builder

WORKDIR /build

COPY package*.json bun.lockb ./

RUN bun install

COPY . .

ENV COMPATIBILITY_DATE=2024-11-13

RUN bun run build

FROM oven/bun:1.1.36-distroless AS production

WORKDIR /app

# Copy both server and client assets
COPY --from=builder /build/.output ./out

CMD ["out/server/index.mjs"]
