FROM node:21.1-slim

WORKDIR /docker/backend

COPY ./backend .

COPY ./swagger/output ./swagger

EXPOSE 4000