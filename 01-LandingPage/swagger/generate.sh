#!/bin/bash

codegen=/docker/swagger-codegen/modules/swagger-codegen-cli/target/swagger-codegen-cli.jar
path=/docker/swagger
version=v1
apipath=/docker/swagger/Api.yaml
outputh=$path/output/$version

rm -rf $outputh/*

java -jar $codegen generate \
    -i $apipath \
    -l typescript-angular \
    -o $outputh/typescript \
    -D models \
    -c $path/config.json

java -jar $codegen generate \
    -i $apipath \
    -l openapi-yaml \
    -o $outputh/yaml
