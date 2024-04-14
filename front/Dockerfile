# front/Dockerfile
FROM node:17

WORKDIR /frontend

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

CMD ["npm", "start"]