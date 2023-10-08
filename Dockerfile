FROM node:18-alpine3.17

WORKDIR /app

COPY . .

WORKDIR server

RUN npm install

CMD ["node","index.js"]

WORKDIR ../client/hello-world-client

RUN npm install

CMD ["npm","run","dev"]

EXPOSE 8080

