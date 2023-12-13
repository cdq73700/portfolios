FROM maven:3.6.0-jdk-13-alpine as mavenBuilder

FROM node:20.6.1-slim as nodeBuilder

FROM openjdk:13.0.2-slim

ENV MAVEN_HOME /usr/share/maven

COPY --from=mavenBuilder ${MAVEN_HOME} ${MAVEN_HOME}
COPY --from=nodeBuilder /usr/local/bin/node /usr/local/bin/node
COPY --from=nodeBuilder /usr/local/lib/node_modules/ /usr/local/lib/node_modules/

RUN ln -s ${MAVEN_HOME}/bin/mvn /usr/bin/mvn

ENV NODE_VERSION 20.6.1

RUN ln -s /usr/local/bin/node /usr/local/bin/nodejs && \
    ln -s /usr/local/lib/node_modules/npm/bin/npm-cli.js /usr/local/bin/npm && \
    ln -s /usr/local/lib/node_modules/npm/bin/npm-cli.js /usr/local/bin/npx

RUN apt-get update && \
    apt-get -qq install -y --no-install-recommends \
    git && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /docker

RUN git clone https://github.com/swagger-api/swagger-editor && \
    git clone -b 3.0.0 https://github.com/swagger-api/swagger-codegen

WORKDIR /docker/swagger-codegen

RUN mvn clean package

WORKDIR /docker/swagger-editor

RUN npm i --legacy-peer-deps

CMD npm start