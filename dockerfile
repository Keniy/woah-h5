FROM node:latest
WORKDIR /app
COPY package*.json ./
RUN npm install -g cnpm --registry=https://registry.npm.taobao.org
RUN cnpm install
COPY . .
RUN npm run build

# production stage
FROM nginx:latest
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]