FROM node:12-buster

ARG MYSQL_URL

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .
RUN yarn prisma2 generate

EXPOSE 3000
CMD ["yarn", "start"]
