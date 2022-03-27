FROM node:16

WORKDIR /usr/src/app

RUN corepack enable
RUN yarn set version stable

COPY .yarn package.json ./

RUN yarn install

COPY . .

EXPOSE 3000
CMD ["yarn", "start"]
