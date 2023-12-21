FROM node:21.1-slim as builder

ENV NODE_ENV production

WORKDIR /docker/backend

COPY ./01-LandingPage/backend .

COPY ./01-LandingPage/swagger/output ./swagger

RUN rm -rf database/*.sqlite3
RUN rm -rf dist
RUN rm -rf node_modules
RUN rm -rf package-lock.json

RUN npm i  && \
    npm run build && \
    npm run typeorm migration:run -- -d ./data-source-cli.ts && \
    npm run seed:run -- -d ./data-source-cli.ts


FROM node:21.1-slim as node

WORKDIR /docker/backend

EXPOSE 4000

ENV NODE_ENV production

COPY --from=builder /docker/backend/database/db.sqlite3 ./database/db.sqlite3
COPY --from=builder /docker/backend/dist ./dist
COPY --from=builder /docker/backend/node_modules ./node_modules

CMD ["node", "dist/src/main.js"]