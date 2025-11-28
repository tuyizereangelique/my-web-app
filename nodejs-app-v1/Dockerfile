# Use an official Node.js image from Docker Hub
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy the application code into the container
COPY app.js .

# Expose the port that the app listens on
EXPOSE 3000

# Define the command to run the app
CMD ["node", "app.js"]
