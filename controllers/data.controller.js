import { newsFetch } from '../services/db/controllers/news.controller.js';

async function getNews(req, res, next) {
  try {
    res.status(200).send({
      msg: "Got your news",
      data: await newsFetch()
    });
    return;
  } catch (err) {
    console.error("PANIC!");
    res.status(500).send({
      msg: "The sever encounterd an error"
    });
    next(err);
  }
}

export {getNews};
