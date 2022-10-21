import React, {useState, useEffect} from 'react'
import {Row,Col,Container} from 'react-bootstrap'
import Product from './Product'
import axios from 'axios'
import "./components.css"

const HomeScreen = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const {data} = await axios.get('http://localhost:5000/products')

            setProducts(data)
        }
        fetchProducts()
    },[])

  return (
    <>
    <h1 className="top">Our Products</h1>
    <Container>
    <Row>
        {products.map(product => (
            <Col sm={12} md={9} lg={6} xl={4}>
                <Product product={product} />
            </Col>
        ))}
    </Row>
    </Container>
    </>
  )
}

export default HomeScreen