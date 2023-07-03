const path = require("path");
const server = require("./src/server");
require("dotenv").config({
    path: path.resolve(__dirname, `./.env.${process.env.NODE_ENV}`),
});
console.log(process.env.NODE_ENV)
console.log(process.env.SERVER_PORT);


console.log("Hello World!");

server.start();
