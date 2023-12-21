FROM node:21.1-slim as builder

ENV NODE_ENV production

WORKDIR /docker/frontend

COPY ./01-LandingPage/frontend .

COPY ./01-LandingPage/swagger/output ./swagger

RUN rm -rf .next
RUN rm -rf node_modules
RUN rm -rf package-lock.json

RUN npm i  && \
    npm run build

FROM node:21.1-slim as node

WORKDIR /docker/frontend

EXPOSE 3000

ENV NODE_ENV production

COPY --from=builder /docker/frontend/.next ./.next
COPY --from=builder /docker/frontend/node_modules ./node_modules
COPY --from=builder /docker/frontend/package.json ./package.json

CMD ["npm", "start"]