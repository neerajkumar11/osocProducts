import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './components.css'

const Footer = () => {
  return (
    <footer className='footer'>
        <Container>
            <Row>
                <Col className='text-center py-3'>
                    Made by 053_Neeraj
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer