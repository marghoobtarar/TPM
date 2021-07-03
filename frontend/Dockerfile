FROM node:12.18.2

WORKDIR /code/

# Install dependencies
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json yarn.lock ./code/

RUN npm install

# Add rest of the client code
COPY . /code

EXPOSE 3000

CMD ["npm", "start"]