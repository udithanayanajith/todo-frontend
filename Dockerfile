# Stage 1: Build
FROM node:20-bullseye-slim AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json / pnpm-lock.yaml
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source files
COPY . .

# Build the frontend
RUN npm run build

# Stage 2: Serve the built app
FROM nginx:alpine

# Copy built files from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx config if needed (optional)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
