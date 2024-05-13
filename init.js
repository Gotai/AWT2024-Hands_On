import express from "express";
import { router } from "./routes/routes.js";

const app = express();
const port = 80;

app.use('/', router)

app.listen(port, () => {
  console.log(`App listening on localhost:${port}`)
});
