
# Use the official Node.js 14.x LTS image as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port that your Node.js application listens on
EXPOSE 8000

# Run the command to start your Node.js application
CMD ["npm", "start"]