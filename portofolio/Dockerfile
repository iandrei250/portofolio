FROM node:20-alpine AS builder

WORKDIR /portofolio

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:20-alpine

RUN npm install -g serve

WORKDIR /portofolio

COPY --from=builder /portofolio/dist ./dist

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]
