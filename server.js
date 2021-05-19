require("dotenv").config();

// Port
const port = process.env.PORT;
const host = process.env.HOST;
const socketPort = process.env.SOCKET_PORT || 8080;

// Package
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const socketio = require("socket.io");
const http = require("http");
const moment = require("moment")
moment.locale('id')


// Router
const router = require("./app/routers");
const { callbackPromise } = require("nodemailer/lib/shared");

// Express
const app = express();

//socketio
const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: '*',
  }
})


io.on("connection", (socket) => {
  console.log("client terhubung dengan id " + socket.id);

  socket.on("initialUserLogin", (idUser) => {
    socket.join(`user:${idUser}`)
  })

  socket.on('sendMessage', (data, callback) => {
    // messageModels.insetMessage(data)
    
    const date = new Date()
    const timeNow = moment(date).format('LT')
    const dataMessage = { ...data, time: timeNow }
    io.to(`user:${dataMessage.id_receiver}`).emit('receiveMessage', dataMessage)
    callback(dataMessage)
    
  })


  socket.on("disconnect", reason => {
 
    console.log("client disconnect " + reason);
  })

})



//rest api
app.use("/images", express.static(path.join(__dirname, "images")));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(cors());
app.use(morgan("dev"));

app.use("/api/v1", router);

app.use("*", (req, res, next) => {
  const err = new Error("Page not found ");
  next(err);
});

app.use((err, req, res, next) => {
  if (err.message === "Uploaded file must be png, jpg or jpeg file") {
    res.status(400).send({
      status: false,
      message: err.message,
    });
  } else if (err.code === "LIMIT_FILE_SIZE") {
    res.status(400).send({
      status: false,
      message: "File image too large",
    });
  } else {
    res.status(404).send({
      status: false,
      message: err.message,
    });
  }
});



server.listen(port, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
