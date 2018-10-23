FROM node:8-alpine

RUN mkdir -p /app
WORKDIR /app

COPY package.json /app
COPY yarn.lock /app
RUN yarn

COPY . /app