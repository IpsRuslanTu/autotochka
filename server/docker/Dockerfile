FROM node:24.12.0

WORKDIR /app

ARG HTTP_PROXY_URL
ARG HTTPS_PROXY_URL

ENV HTTP_PROXY=$HTTP_PROXY_URL
ENV HTTPS_PROXY=$HTTPS_PROXY_URL
ENV http_proxy=$HTTP_PROXY_URL
ENV https_proxy=$HTTPS_PROXY_URL

COPY package*.json ./
RUN npm install

ENV HTTP_PROXY=""
ENV HTTPS_PROXY=""
ENV http_proxy=""
ENV https_proxy=""

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start:dev"]