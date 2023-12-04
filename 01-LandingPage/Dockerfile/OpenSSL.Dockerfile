FROM debian:12.2

RUN apt-get update && \
    apt-get -qq install -y --no-install-recommends \
    openssl && \
    rm -rf /var/lib/apt/lists/*

ARG USERNAME=postgres
ARG GROUPNAME=postgres
ARG UID=999
ARG GID=999
RUN groupadd -g $GID $GROUPNAME && \
    useradd -m -s /bin/bash -u $UID -g $GID $USERNAME

WORKDIR /docker

COPY ./openssl/setup*.sh .
RUN chmod +x setup*.sh

WORKDIR /docker/certs