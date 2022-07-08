
FROM node:16.15.1

WORKDIR /usr/app

COPY package.json ./

RUN npm install --only=prod

EXPOSE 3000

ENTRYPOINT [ "./start.sh" ]

