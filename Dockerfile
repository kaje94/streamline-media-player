# BUILD PHASE
FROM node:16-alpine as builder
WORKDIR /app
COPY ["package.json","package-lock.json","tsconfig.json","./"]
RUN npm i
COPY src src
COPY public public
RUN npm run build

# RUN PHASE
FROM nginx:1.17.3-alpine
COPY --from=builder /app/build/ /var/www
COPY .nginx /etc/nginx
WORKDIR /var/www
CMD ["nginx", "-g", "daemon off;"]