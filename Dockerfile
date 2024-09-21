# Base image for Bun (official Bun image)
FROM oven/bun:latest

# Set working directory inside the container
WORKDIR /app

# Copy package.json and bun.lockb files
COPY package.json bun.lockb ./

# Install dependencies using Bun
RUN bun install

# Copy the rest of the application code to the container
COPY . .

# Build the Vite project
RUN bun run build

# Expose the port (Vite typically serves on port 3000)
EXPOSE 5173

# Run the Vite project in production mode
CMD ["bun", "vite", "--host"]
