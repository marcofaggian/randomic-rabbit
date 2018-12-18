FROM node

WORKDIR /usr/app

COPY package.json ./

RUN npm i --production

COPY server.js ./
COPY ./build ./

EXPOSE 3000
CMD [ "node", "server.js" ]
USER node