FROM node:21.1-slim

WORKDIR /docker/frontend

COPY ./frontend .

EXPOSE 3000