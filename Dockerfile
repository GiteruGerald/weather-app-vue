FROM node:18-alpine AS build
RUN npm install -g http-server
WORKDIR /app
ADD package*.json ./
RUN npm install
ADD . .
RUN npm run build
EXPOSE 8080
CMD [ "http-server", "dist" ]