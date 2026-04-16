# Backend
# - - - - Stage 1: Development - - - - - #
FROM node:lts-alpine3.23 AS development
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
WORKDIR /home/node/app
COPY --chown=node:node package*.json ./
COPY --chown=node:node . .
COPY --chown=node:node entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/entrypoint.sh
USER node
EXPOSE 3000
ENTRYPOINT [ "entrypoint.sh" ]
CMD [ "npm","run","start:dev" ]

# - - - - Stage 2: Build - - - - - #
FROM node:lts-alpine3.23 AS build
WORKDIR /home/node/app
COPY --chown=node:node package*.json ./
RUN npm install
COPY --chown=node:node  . .
RUN npm run build && \
    npm ci --omit=dev && \
    npm cache clean --force
USER node

# - - - - Stage 3: Production (The Slim Image) - - - - - #
FROM node:lts-alpine3.23 AS production
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /home/node/app
COPY --chown=node:node --from=build /home/node/app/package*.json ./
COPY --chown=node:node --from=build /home/node/app/node_modules ./node_modules
COPY --chown=node:node --from=build /home/node/app/dist ./dist
EXPOSE 3000
USER node
CMD [ "node","dist/main" ]



