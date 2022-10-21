import React,{useState} from 'react'
import {Row, Col, Button, Form} from 'react-bootstrap'
import Header from './Header'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import "./components.css"

const Login = ({setLoginUser}) => {

    const navigate = useNavigate()

    const [ user, setUser ] = useState({
        email:"",
        password:""
    }) 

    const handleChange = e => {
        const {name,value} = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login  = () => {
      const {email, password} = user
      if(email && password){
          axios.post("http://localhost:5000/login", user)
          .then(res => {
            alert(res.data.message)
            // console.log(res.data.user)
            setLoginUser(res.data.user)
            // console.log(res.data.user)
            navigate("/")
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
    <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name='email' value={user.email} onChange={handleChange}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name='password' value={user.password} onChange={handleChange}/>
        </Form.Group>
        <div className='button' onClick={login}>Sign In</div>
    <Form.Group className="mb-3 text">
        <Form.Text className="text-muted">
          Don't have an account ?
        </Form.Text>
    <Button variant="" type="submit" onClick={() => {
      navigate('/register')
    }}>
        Sign Up
    </Button>
    </Form.Group>
    </Form>
    </Row>
    </>
  )
}

export default Login