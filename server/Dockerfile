FROM node:20

WORKDIR /server

COPY package*.json ./

RUN npm install

COPY . /server

EXPOSE 3000

ENV NODE_ENV production

CMD ["node", "server.js"]