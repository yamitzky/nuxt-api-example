FROM python:3.6-alpine

RUN apk add --no-cached \
    build-base \
    ca-certificates

RUN pip install pipenv

RUN mkdir -p /app
WORKDIR /app

COPY Pipfile /app
COPY Pipfile.lock /app
RUN pipenv install --system --deploy --dev

COPY . /app