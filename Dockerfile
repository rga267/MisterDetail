# build environment
FROM node:13.12.0-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm start

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
