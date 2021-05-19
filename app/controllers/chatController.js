const connection = require("../configs/dbConfig")
const chatModel = require("../models/chatModel")
const helper = require("../helpers/printHelper")



exports.getAllChat = (req, res) => {
    const idSender = req.auth.userID

    chatModel
        .getAllChat(idSender)
        .then((result) => {
            if (result.length > 1) {
                helper.printSuccess(res, 200, "Get all chat history successfull", result);
            } else {
                helper.printError(res, 404, "there's no chat history");
            }
        })
        .catch((err) => {
            helper.printError(res, 500, err.message);
        })
}
exports.insertChat = (req, res) => {
    const { id_sender, id_receiver, message } = req.body
 
    const data = {
        id_sender,
        id_receiver,
        message,
    }

    chatModel
        .insertChat(data)
        .then((result) => {
            helper.printSuccess(res, 200, "insert chat successfull", result);
        })
        .catch((err) => {
            helper.printError(res, 500, err.message);
        })

}
exports.deleteChat = (req, res) => {
    const idMessage = req.query.idMessage

    chatModel
        .deleteChat(idMessage)
        .then((result) => {
            helper.printSuccess(res, 200, "delete chat history successfull", result);
        })
        .catch((err) => {
            helper.printError(res, 500, err.message);
        })

}