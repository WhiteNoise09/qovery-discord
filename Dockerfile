FROM node
ENV TOKEN=ODAyOTUxOTgxNDU0ODUyMTA4.YA2tTg.06TIIH3y0qVzL25eCKyEhBO0KMY

COPY index.js .
COPY package*.json ./

RUN npm ci --only=production

CMD [ "node", "index.js" ]