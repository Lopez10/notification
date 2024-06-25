# Usar la versión completa de Node.js para asegurar que todas las herramientas necesarias estén disponibles
FROM node:22 AS builder

# Instalar pnpm
RUN npm install -g pnpm

# Instalar las herramientas necesarias para compilar módulos nativos
RUN apt-get update && apt-get install -y \
    python3 \
    make \
    g++ \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package*.json ./

RUN pnpm install

COPY . .

RUN pnpm build

FROM node:22

RUN npm install -g pnpm

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/pnpm-lock.yaml ./
COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["pnpm", "start"]
