const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());


app.use(express.json());
app.use(express.urlencoded({ extended: true }))
require("./server/config/mongoose.config");
require("./server/routes/player.routes")(app);

const server = app.listen(8000 ,()=> console.log("The server is listening to port 8000"))
const io = require("socket.io")(server);
io.on("connection" , socket => {
    socket.on("event_from_client", data=>{

        socket.broadcast.emit("send_data_to_all_other_clients", data);

    });
});