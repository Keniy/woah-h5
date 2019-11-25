FROM node:latest
WORKDIR /
COPY package*.json ./
RUN npm config rm proxy
RUN npm config rm https-proxy
RUN npm install -g cnpm --registry=https://registry.npm.taobao.org
RUN cnpm install
COPY . .
RUN npm run build

# production stage
FROM nginx:latest
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY dist/ /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]