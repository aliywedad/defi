# front/Dockerfile
FROM node:20

WORKDIR /frontend

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

CMD ["npm", "start"]