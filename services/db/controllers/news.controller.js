import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function fetchNews() {
  const news = await fs.readFileSync(path.resolve(__dirname, "../news.data.json"), "utf8", (error, data) => {
    if (error) {
      console.log("Coudn't read file", error);
      return;
    }
    return data;
  })

  return JSON.parse(news);
}

async function newsFetch() {
  const news = await fetchNews();
  return news[Math.floor(Math.random() * news.length)];
}

export {newsFetch};
