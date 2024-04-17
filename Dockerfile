# Stage 1: Build the application
FROM registry.pishro.local/node:buster as build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Setup Express server to serve the application
FROM registry.pishro.local/node:buster

# Set the working directory in the Docker image
WORKDIR /app

# Install Express
RUN npm install express

# Copy built application from the previous stage
COPY --from=build /app/dist ./dist

# Copy the server script
COPY deploy/express/server.js .

# Expose the port the app runs on
EXPOSE 80

# Command to run the app
CMD ["node", "server.js"]
