import React from 'react'
import {Alert, Navbar, Container, Nav} from 'react-bootstrap'
import HomeScreen from './HomeScreen'
import Footer from './Footer'
import "./components.css"
import { Navigate, useNavigate } from 'react-router-dom'

const Home = ({setLoginUser}) => {

    const navigate = useNavigate()

  return (
    <>
    <header>
     <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand href='/'>OSOC </Navbar.Brand>
        <Nav className="ms-auto">
        <div className='btn' onClick={() => setLoginUser({})}>Logout</div>
        </Nav>
      </Container>
    </Navbar>
    </header>
    <HomeScreen />
    <div className='button ma' onClick={() => {
        console.log("hello")
        navigate('/add')
    }}>Add Product</div>
    <Footer />
    </>
  )
}

export default Home