FROM node:20.11-alpine AS base
WORKDIR /frontend

COPY package.json ./
RUN npm i
COPY . .

EXPOSE 5173

CMD [ "npm", "run", "dev" ]