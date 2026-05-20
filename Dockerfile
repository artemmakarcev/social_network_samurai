# Multi-stage Dockerfile for Vite + Nginx deployment on Coolify
# Environment variables are injected by Coolify during build time automatically

FROM oven/bun:1-alpine AS builder

WORKDIR /app

# Copy package files first for better layer caching
COPY package.json bun.lock ./

# Install all dependencies (including devDependencies needed for build)
RUN bun install --frozen-lockfile

# Copy source code
COPY . .

# Build the application for production
# VITE_API_URL and VITE_API_KEY will be available from Coolify environment settings
RUN bun run build

# Production stage - Nginx serves the built static files
FROM nginx:alpine

# Copy built assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Set proper permissions for Nginx
RUN chown -R nginx:nginx /usr/share/nginx/html \
    && chown -R nginx:nginx /var/cache/nginx \
    && chown -R nginx:nginx /var/log/nginx \
    && chmod 644 /etc/nginx/conf.d/default.conf

# Note: Healthcheck is managed by Coolify - do not define HEALTHCHECK in Dockerfile
# when using Docker-based deployment on Coolify

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]