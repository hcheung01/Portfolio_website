FROM node:latest

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
EXPOSE 3000
COPY package.json /usr/src/app

RUN npm install

CMD ["npm", "start"]

