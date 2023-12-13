FROM node:21.1-slim

WORKDIR /docker/frontend

COPY ./frontend .

COPY ./swagger/output ./swagger

EXPOSE 3000