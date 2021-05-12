# build environment
FROM node:13.12.0-alpine as build
RUN mkdir /app
WORKDIR /app
COPY package.json /app
COPY package-lock.json /app
RUN npm install
RUN npm install --save reactstrap 
RUN npm install --save react-router-dom
RUN npm install --save react react-dom react-scripts
COPY . /app
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
