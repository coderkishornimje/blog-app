import React, { createContext } from 'react'
import {reviews} from './data/blogs';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Reviews() {
  return (
    <div className='review-container'>
      {
        reviews.map((item)=>{
        return(
          <ul>
          <Card style={{ width: '40rem' }}>
          <Card.Body>
          <Card.Title>{item.id}</Card.Title>
          <Card.Text>
            <span>{item.uid}</span><br/>           <span>{item.discription}</span><br/>
            <span>{item.cDate}</span><br/>
            <span>{item.uDate}</span><br/>
            <span>{item.p_id}</span><br/>
            <button>Delete</button>
            </Card.Text>       
            </Card.Body>
            </Card>
            </ul>
        )  
        
        })
      }
    </div>
  )
}

export default Reviews