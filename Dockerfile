FROM node:16 as build
WORKDIR /app
COPY ["package.json", "*.lock", "./"]
RUN yarn
COPY . .
RUN yarn build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /app/build ./
ENTRYPOINT ["nginx", "-g", "daemon off;"]
