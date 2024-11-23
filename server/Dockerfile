FROM node:20-slim

WORKDIR /app
COPY package*.json ./
RUN npm ci
RUN npm i -g typescript
RUN npm i
COPY . .

RUN apt-get -y update
RUN apt-get -y install curl

CMD ["npm", "run", "dev"]
