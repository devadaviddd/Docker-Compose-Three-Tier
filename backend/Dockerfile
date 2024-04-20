FROM node:16
WORKDIR /app
COPY . .
EXPOSE 8000

# add permissions to the deploy script
RUN chmod +x deploy.sh
ENTRYPOINT [ "/app/deploy.sh" ]