FROM node:12.18.2

WORKDIR /code/

RUN apt-get update && \
      apt-get -y install sudo
# Install dependencies
COPY package.json yarn.lock /code/

RUN sudo npm install

# Add rest of the client code
COPY . /code/

EXPOSE 3000

CMD sudo npm start
