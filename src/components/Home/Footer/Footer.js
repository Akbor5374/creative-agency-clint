import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="background-color" style={{ width: '100%', height: 'auto', padding: '20px  0px 40px 0px' }}>
            <Container>
                <Row className="mt-4">
                    <Col md={6}>
                        <h2 className="font-weight-bold mb-4">Let us handle your <br /> project, professionally.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt repellendus quod quo excepturi, nemo dolore.</p>
                    </Col>
                    <Col md={6}>
                        <Form>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Control type="text" placeholder="your name" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" rows={6} placeholder="your message" />
                            </Form.Group>
                            <Button className="button-style btn-block py-2">Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;