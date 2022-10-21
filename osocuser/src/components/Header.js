import React from 'react'
import {Container, Navbar} from 'react-bootstrap';

const Header = () => {
  return (
    <header>
     <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand href='/'>OSOC</Navbar.Brand>
      </Container>
    </Navbar>
    </header>
  )
}

export default Header