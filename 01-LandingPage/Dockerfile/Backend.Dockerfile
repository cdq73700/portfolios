FROM node:21.1-slim

ENV NODE_ENV development

WORKDIR /docker/backend

COPY ./backend .

COPY ./swagger/output ./swagger

EXPOSE 4000