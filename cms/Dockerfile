FROM node:22-alpine AS base
# Installing libvips-dev for sharp compatibility
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev bash vips-dev git
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

FROM base AS dependencies
WORKDIR /opt/
COPY package.json package-lock.json ./
COPY cms/package.json cms/
COPY web/package.json web/
RUN npm install -g node-gyp
RUN npm config set fetch-retry-maxtimeout 600000 -g && npm ci
ENV PATH=/opt/node_modules/.bin:$PATH

WORKDIR /opt/app
COPY . .
RUN chown -R node:node /opt/app
USER node
WORKDIR /opt/app/cms
EXPOSE 1338
CMD ["npm", "run", "develop"]
