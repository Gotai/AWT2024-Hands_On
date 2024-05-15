import { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function NewsCard({news}) {
  console.log(news)  
  return (
    <>
     <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
    {news.author} 
      </Typography>
      <Typography variant="h5" component="div">
    {news.title} 
      </Typography>
      <Typography variant="body2">
    {news.body} 
      </Typography>
    </CardContent>
    </>
  )
}

export default NewsCard
