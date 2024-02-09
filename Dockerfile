FROM node:latest as build

WORKDIR /usr/local/app

# Add the source code to app
COPY ./ /usr/local/app/

# Install all the dependencies
RUN npm install -f
# Generate the build of the application
RUN npm run build


# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:latest

COPY configure_nginx.sh /usr/local/bin/configure_nginx.sh

RUN chmod +x /usr/local/bin/configure_nginx.sh

RUN /usr/local/bin/configure_nginx.sh


COPY --from=build /usr/local/app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80
EXPOSE 443