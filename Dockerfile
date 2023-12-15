FROM node:20-bullseye-slim

ENV CI=true
ENV NODE_ENV=production

WORKDIR /suitespot/workspace

RUN corepack enable
COPY index.js package.json pnpm-lock.yaml ./
RUN pnpm i

ENTRYPOINT [ "node", "/suitespot/workspace/index.js" ]
