# Step 1: Build the React app
FROM node:18-alpine AS build
WORKDIR /app

# Copy only package.json and package-lock.json first
COPY package*.json ./

# Install dependencies first to leverage Docker cache
RUN npm install

# Then copy the rest of the code
COPY . .

# Build your app
RUN npm run build

# Step 2: Serve it with Nginx
FROM nginx:alpine

# Copy build output to Nginx's public directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
