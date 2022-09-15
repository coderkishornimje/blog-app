import React, { useState } from 'react'
//import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {myblog} from './data/blogs';

function Home() {
  return (
    <div className='grid-container'>
    {
      myblog.length >0 &&
      myblog.map((item)=>{

      return(
    <div>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          {item.body}
          <br />
          {item.cDate}<br/>
          {item.uDate}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><a href="https://economictimes.indiatimes.com/blogs/world/">Learn More</a></Button>
        <Button onClick={() => deleteHandler(item.id)}>Delete</Button>
        <Button className='btn-primary'>Update Block</Button>
      </CardActions>
    </Card>
    </div>
      )
   })
    }
    </div>
  )
}

export default Home