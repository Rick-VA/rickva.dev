FROM node:current-bookworm AS builder

WORKDIR /build

COPY package*.json ./

RUN npm ci

COPY . .

ENV COMPATIBILITY_DATE=2025-05-06

RUN npm run build

FROM denoland/deno:distroless-2.3.1 AS production

WORKDIR /app

COPY --from=builder /build/.output ./out

EXPOSE 80

ENV PORT=80

CMD ["--allow-env", "--allow-net", "--allow-read", "out/server/index.mjs"]
