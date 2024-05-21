import { Server } from "socket.io";
import { newsFetch } from "../db/controllers/news.controller.js";

let io;
function socketConnection(server) {
  io = new Server(server, {
    cors: {
      cors: {
        origin: "http://localhost:3000"
      }
    }
  });

  io.on('connection', async (socket) => {
    console.info(`Client connected [id=${socket.id}]`)
    const intervalID = setInterval(sendData(socket), 5000);
    
    socket.on("getNews", async () => {
      const news = await newsFetch();
      socket.emit('NewsData', news);
    })

    socket.on("initNews", async () => {
      const news = await newsFetch();
      socket.emit('NewsData', news);
    })

    socket.on("disconnect", () => {
      clearInterval(intervalID);
      console.info(`Client disconnected [id=${socket.id}]`);
    })
  })
}

function sendData(socket) {
  return async () => {socket.emit('NewsData', {data: await newsFetch(), eventName: 'NewsData Event!'});}
} 

export {socketConnection};
