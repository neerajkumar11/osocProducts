import React,{useState} from 'react'
import {Row, Col, Button, Form, Navbar,Container,Nav,} from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import "./components.css"

const Add = ({setLoginUser, user}) => {

    const navigate = useNavigate()

    const [ product, setProduct ] = useState({
        name:"",
        image:"",
        price:"",
    }) 

    const handleChange = e => {
        const {name,value} = e.target
        setProduct({
            ...product,
            [name]: value
        })
        // console.log(product)
    }

    const add  = () => {
        if(user.email == 'admin@osoc.com'){
            const {name, image, price} = product
            if(name && image && price){
                axios.post("http://localhost:5000/add", product)
                .then(res => {
                    alert(res.data.message)
                    // navigate("/add")
                })
            } else {
                alert("Please enter all the fields")
            }
        } else {
            alert("Only admin can add items. Login with admin credentials to add items")
        }
        
        
    }

  return (
    <>
      <header>
     <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand href='/'>OSOC </Navbar.Brand>
        <Nav className="ms-auto">
        <div className='btn' onClick={() => {
            setLoginUser({})
            navigate('/')
            }}>Logout</div>
        </Nav>
      </Container>
    </Navbar>
    </header>
      <Row className="ma">
        <Form className='ma'>
            {console.log(product)}
        <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Enter Name</Form.Label>
            <Form.Control type="name" placeholder="Enter name" name='name' value={product.name} onChange={handleChange}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter Image Path</Form.Label>
            <Form.Control type="name" placeholder="Enter image path" name='image' value={product.image} onChange={handleChange}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Price</Form.Label>
            <Form.Control type="name" placeholder="price" name='price' value={product.price} onChange={handleChange}/>
        </Form.Group>
        <div className='button' onClick={add}>Add Product</div>
        </Form>
      </Row>
    </>
  )
}

export default Add