const connection = require("../configs/dbConfig");
const moment = require("moment")
moment.locale('id')

exports.getAllChat = (idSender) => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM chat_history WHERE id_sender OR id_receiver = ?", idSender,
            (err, result) => {
                if (!err) {
                    let newResult = result.map(({id_message, id_sender, id_receiver, message, createdAt})=>{
                        return {
                            id_message, 
                            id_sender, 
                            id_receiver, 
                            message, 
                            createdAt: moment(createdAt).format("LT")
                        }
                    })
                   
                    resolve(newResult)
                } else {
                    reject(new Error("Internal server error"));
                }
            })
    })
}
exports.insertChat = (data) => {
    return new Promise((resolve, reject) => {
        connection.query("INSERT INTO chat_history SET ?", data,
            (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error("Internal server error"));
                }
            })
    })
}
exports.deleteChat = (idMessage) => {
    return new Promise((resolve, reject) => {
        connection.query("DELETE FROM chat_history WHERE id_message = ?", idMessage,
            (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error("internal server error"))
                }
            })
    })
}