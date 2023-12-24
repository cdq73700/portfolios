FROM node:21.1-slim

ENV NODE_ENV development

WORKDIR /docker/backend

COPY ./backend .

COPY ./swagger/output ./swagger

COPY ./license/json ./license

EXPOSE 4000