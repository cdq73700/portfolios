FROM nginx:1.25.3

WORKDIR /etc/nginx/conf.d/

COPY ./nginx/conf /etc/nginx/conf.d

EXPOSE 80