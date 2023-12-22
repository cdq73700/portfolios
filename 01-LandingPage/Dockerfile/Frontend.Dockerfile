FROM node:21.1-slim

ENV NODE_ENV development

WORKDIR /docker/frontend

COPY ./frontend .

COPY ./swagger/output ./swagger

EXPOSE 3000