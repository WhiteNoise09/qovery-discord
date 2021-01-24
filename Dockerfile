FROM node
COPY index.js .
COPY package*.json ./
RUN npm ci --only=production
CMD [ "node", "index.js" ]