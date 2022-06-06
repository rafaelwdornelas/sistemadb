FROM node:alpine
WORKDIR /usr/app
COPY package*.json ./
RUN npm install && npm cache clean --force
COPY . .
COPY .sequelizerc .
EXPOSE 37778
#CMD ["npm", "start"]