import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Card,Row,Col,Button } from 'react-bootstrap'
import axios from 'axios'

const Product = ({product}) => {

  return (
    <Card className="my-3 p-3 rounded">
        <Card.Img src={product.image} variant='top' />
        <Card.Body>
        <Card.Title as='div'>
            <b>{product.name}</b>
        </Card.Title>
        <Row>
            <Col><Card.Text as='p' className='my-3'>Price : ₹{product.price}</Card.Text></Col>
        </Row>
       
        
        </Card.Body> 
    </Card>
  )
}

export default Product