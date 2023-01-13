FROM node:19.4.0-alpine
WORKDIR /app

ENV CI true
ENV NODE_ENV production

COPY .env.local vercel.json index.html ./
COPY dist/ dist/

RUN yarn global add serve
CMD ["serve", "-s", "dist/"]
