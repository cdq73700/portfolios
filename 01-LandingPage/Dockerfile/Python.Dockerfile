FROM python:3.12-slim

ENV ENV development

WORKDIR /docker/python

COPY ./python .
COPY ./license ./license

RUN pip3 install -r requirements.txt

RUN pipenv install

# 実行コマンド
# RUN pipenv run start