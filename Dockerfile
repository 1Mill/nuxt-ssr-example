FROM node:10.9-alpine

# Update system dependencies and install git (to get nuxt)
RUN apk update

# Install yarn v1.9.x
RUN npm install -g yarn@1.9

# Make the 'app' directory and set it to the active director
RUN mkdir /app
WORKDIR /app

# Copy over dependencies
COPY package.json *yarn* ./

# Install dependencies through yarn
RUN yarn install

# Copy remaining files
COPY . .
