# Use an official Node.js runtime as the base image
FROM node:18-alpine AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Use a new stage for the production image
FROM node:18-alpine AS production

# Set the working directory inside the container
WORKDIR /app

# Copy only the built application from the build stage
COPY --from=build /app .

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["node", "app.js"]
