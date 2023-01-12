FROM node:19.4.0-alpine
WORKDIR /app

ENV CI true
ENV NODE_ENV production

COPY package.json yarn.lock tsconfig.json .
COPY src/ src/

RUN yarn install --production --frozen-lockfile
CMD ["yarn", "start"]
