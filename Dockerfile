# syntax=docker/dockerfile:1

FROM node:16.17.1
ENV NODE_ENV=production
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production
COPY ./src .
CMD [ "node", "index.js" ]