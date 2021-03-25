FROM node:alpine3.13

WORKDIR /app
COPY package.json .
RUN npm install --production
COPY . .

CMD [ "node","dist/index.js"]
