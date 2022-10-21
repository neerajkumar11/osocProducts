import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Row, Col} from 'react-bootstrap'
import "./components.css"

const Forms = () => {
  return (
    <>
    <Row class="ma">
    <Form className='ma'>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Button variant="primary" type="submit">
        Submit
    </Button>
    </Form>
    </Row>
    
    </>
  );
}

export default Forms