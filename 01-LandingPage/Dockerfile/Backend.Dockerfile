FROM node:21.1-slim

WORKDIR /docker/backend

COPY ./backend .

EXPOSE 4000