const express = require("express");
const route = express.Router();

const usersRouter = require("./usersRouter");
const chatRouter = require("./chatRouter");

route.use("/users", usersRouter)
route.use("/chat", chatRouter)

module.exports = route;
