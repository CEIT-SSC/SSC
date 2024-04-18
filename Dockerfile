# Build
FROM focker.ir/node:latest as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Server
FROM focker.ir/node:latest
WORKDIR /app
RUN npm install express
COPY --from=build /app/dist ./dist
COPY deploy/express/server.js .
EXPOSE 8080
CMD ["node", "server.js"]
