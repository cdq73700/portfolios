FROM debian:12.2

RUN apt-get update && \
    apt-get -qq install -y --no-install-recommends \
    openssl && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /docker

COPY ./openssl/setup*.sh .
RUN chmod +x setup*.sh

WORKDIR /docker/certs