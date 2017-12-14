FROM node:9.2.1-alpine

RUN mkdir -p /app
COPY package.json /app
WORKDIR /app
RUN npm install --verbose
ENV NODE_PATH=/app/node_modules
COPY . .

EXPOSE 3000

CMD ["npm", "start"]