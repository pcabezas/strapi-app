FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY ./strapi-app/package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 1337