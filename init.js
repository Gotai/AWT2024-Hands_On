import express from "express";
import { createServer } from "node:http";
import { socketConnection } from "./services/sockets/socket.controller.js";

import cors from "cors";
import { router } from "./routes/routes.js";

const app = express();
const port = 3000;

app.use(cors())

app.use('/', router)

const server = createServer(app);
socketConnection(server)
server.listen(port, () => {
  console.log(`App listening on localhost:${port}`)
});
