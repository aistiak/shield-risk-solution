# Use an official Node.js runtime as a parent image
FROM node:16

# Set the working directory to /app
WORKDIR /app

# Install Puppeteer dependencies
RUN apt-get update && \
    apt-get install -yq \
    gconf-service \
    libnss3 \
    libasound2 \
    libatk1.0-0 \
    libc6 \
    libcairo2 \
    libcups2 \
    libdbus-1-3 \
    libexpat1 \
    libfontconfig1 \
    libgcc1 \
    libgconf-2-4 \
    libgdk-pixbuf2.0-0 \
    libglib2.0-0 \
    libgtk-3-0 \
    libnspr4 \
    libpango-1.0-0 \
    libpangocairo-1.0-0 \
    libstdc++6 \
    libx11-6 \
    libx11-xcb1 \
    libxcb1 \
    libxcomposite1 \
    libxcursor1 \
    libxdamage1 \
    libxext6 \
    libxfixes3 \
    libxi6 \
    libxrandr2 \
    libxrender1 \
    libxss1 \
    libxtst6 \
    ca-certificates \
    fonts-liberation \
    fonts-noto-color-emoji \
    fonts-noto-cjk-extra \
    fonts-noto-hinted &&\
  rm -rf /var/lib/apt/lists/*

# Install app dependencies
COPY package*.json ./
RUN yarn install

# Bundle app source
COPY . .

# Expose the port that the app listens on
EXPOSE 8080

# Run the app with Puppeteer
CMD ["yarn", "start"]
