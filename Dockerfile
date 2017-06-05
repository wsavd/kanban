FROM alpine:3.4

RUN apk add --update nodejs bash git

RUN npm install

ENV PORT 8080

EXPOSE  8080

CMD ["npm", "start"]