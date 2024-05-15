import { useState, useEffect } from 'react';
import { Button } from "@mui/material";
import NewsCard from './components/newscard.jsx';
import './NewsFeed.css'
import axios from 'axios';

function NewsFeed({NewsData}) {
  const [news, setNews] = useState(NewsData.length ? NewsData : []);
  
  useEffect(() => {
    // getNews();
  }, []);

  function getNews() {
    axios.get("http://127.0.0.1:3000/api").then((res) => {
      setNews([...news, res.data.data]);
    })
  }
  return (
    <>
    {NewsData.concat(news).map((post, index) => {
      return (
        <>
        <NewsCard
         news={post} 
        />
        </>
      );
    })}
    <Button onClick={() => getNews()}>
      Fetch News
    </Button>
    </>
  )
}

export default NewsFeed
