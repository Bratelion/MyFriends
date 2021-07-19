FROM node:16.4.2

WORKDIR home/app

COPY package.json /home/app/
COPY package-lock.json /home/app/
COPY .env /home/app
RUN npm i

COPY . /home/app

EXPOSE 3000
CMD [ "npm", "run", "migration:run" ]
CMD [ "npm", "start" ]
