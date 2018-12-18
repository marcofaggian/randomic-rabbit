FROM node

WORKDIR /usr/app

COPY package.json ./

RUN npm i --production

COPY build/. ./

EXPOSE 4000
CMD [ "node", "index.js" ]
USER node