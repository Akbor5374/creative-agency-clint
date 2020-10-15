import React from 'react';
import { Col, Container, Form, Jumbotron, Row, Button } from 'react-bootstrap';

const OrderServiceForm = ({ service, user,handleOrder,handleSubmit }) => {
    return (
        <Container>
            <Form>
                <Jumbotron>
                    <Row>
                        <Col md={7}>
                            <Form.Group controlId="name">
                                <Form.Control
                                    type="text"
                                    placeholder="Enter name"
                                    defaultValue={user.name}
                                    name="name"
                                    onBlur={handleOrder}
                                />
                            </Form.Group>

                            <Form.Group controlId="email">
                                <Form.Control
                                    type="email"
                                    placeholder="email"
                                    defaultValue={user.email}
                                    name="email"
                                    onBlur={handleOrder}
                                />
                            </Form.Group>

                            <Form.Group controlId="service">
                                <Form.Control
                                    type="service"
                                    placeholder="title"
                                    defaultValue={service.title}
                                />
                            </Form.Group>

                            <Form.Group controlId="textarea">
                                <Form.Control
                                    as="textarea"
                                    rows={6}
                                    defaultValue={service.description}
                                    placeholder="enter service description"
                                />
                            </Form.Group>
                            <Button onClick={handleSubmit} className="button-style mt-3" type="submit">
                                Submit
                        </Button>
                        </Col>
                    </Row>
                </Jumbotron>
            </Form>
        </Container>
    );
};

export default OrderServiceForm;