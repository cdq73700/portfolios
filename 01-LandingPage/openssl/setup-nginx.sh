#!/bin/sh

cd /docker/certs/nginx

openssl genpkey -algorithm RSA -out root.key
openssl req -new -x509 -key root.key -out root.crt -subj "/CN=localhost"
openssl genpkey -algorithm RSA -out server.key
openssl req -new -key server.key -out server.csr -subj "/CN=localhost"
openssl x509 -req -in server.csr -CA root.crt -CAkey root.key -CAcreateserial -out server.crt

chmod 400 root.crt server.key

mv root.* ./certs
mv server.* ./certs