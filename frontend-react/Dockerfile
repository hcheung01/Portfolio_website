FROM node:12-stretch-slim AS build-env

WORKDIR /usr/src/app
ADD package*.json ./
RUN npm install
ADD . ./
RUN npm run-script build

FROM nginx:1.16-alpine
COPY --from=build-env /usr/src/app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
