# Dockerfile for Job Application Management System
# Step 1: Use Node.js base image
FROM node:18-alpine

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy dependency files
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install --production

# Step 5: Copy application code
COPY . .

# Step 6: Expose port 3000
EXPOSE 3000

# Step 7: Start the application
CMD ["node", "app.js"]
