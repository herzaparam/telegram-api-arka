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


// Router
const router = require("./app/routers");

// Express
const app = express();

//socketio
const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: '*',
  }
})

//connected with user
io.on('connection', (socket)=>{
  console.log(`client with id : ${socket.id} has been join `);

  socket.on('sendMessage', (data)=>{
    socket.emit('receiveMessage', data)

  })






  socket.on('disconnect', reason =>{
    console.log(`client disconnect ${reason}`);
  })
});



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
