const express = require("express");
const router = express.Router();
const chatController = require("../controllers/chatController");
const auth = require("../middlewares/auth");

router
    .get("/history", auth.verification(), chatController.getAllChat)
    .post("/insert", chatController.insertChat)
    .delete("/delete", chatController.deleteChat)

module.exports = router;

