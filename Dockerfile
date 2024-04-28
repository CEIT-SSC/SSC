# Build
FROM focker.ir/node:20 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Server
FROM focker.ir/node:20
WORKDIR /app
RUN npm install express
COPY --from=build /app/dist ./dist
COPY deploy/express/server.js .
EXPOSE 8080
CMD ["node", "server.js"]
