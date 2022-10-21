import React,{useState} from 'react'
import {Row, Col, Button, Form} from 'react-bootstrap'
import Header from './Header'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import "./components.css"

const Register = () => {

    const navigate = useNavigate()

    const [ user, setUser ] = useState({
        name:"",
        email:"",
        password:""
    }) 

    const handleChange = e => {
        const {name,value} = e.target
        setUser({
            ...user,
            [name]: value
        })
        console.log(user)
    }

    const register  = () => {
        const {name, email, password} = user
        if(name && email && password){
            axios.post("http://localhost:5000/register", user)
            .then(res => {
                alert(res.data.message)
                navigate("/login")
            })
        } else {
            alert("Please enter all the fields")
        }
        
    }

  return (
    <>
      <Header />  
      <Row className="ma">
        <Form className='ma'>
            {console.log(user)}
        <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Enter Name</Form.Label>
            <Form.Control type="name" placeholder="Enter name" name='name' value={user.name} onChange={handleChange}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name='email' value={user.email} onChange={handleChange}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name='password' value={user.password} onChange={handleChange}/>
        </Form.Group>
        <div className='button' onClick={register}>Sign Up</div>
        <Form.Group className="mb-3 text">
            <Form.Text className="text-muted">
            Already have an account ?
            </Form.Text>
        <Button variant="" type="submit" onClick={() => {
            navigate('/login')
        }}>
            Sign In
        </Button>
        </Form.Group>
        </Form>
      </Row>
    </>
  )
}

export default Register