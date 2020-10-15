import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

const Review = ({ handleInput,handleSubmit }) => {
    return (
        <Row>
            <Col md={6}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="name">
                        <Form.Control
                            type="text"
                            placeholder="Enter your email"
                            name="name"
                            onBlur={handleInput}
                        />
                    </Form.Group>

                    <Form.Group controlId="company">
                        <Form.Control
                            type="text"
                            placeholder="enter your company name"
                            name="company"
                            onBlur={handleInput}
                        />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="enter your description"
                            name="description"
                            onBlur={handleInput}
                        />
                    </Form.Group>

                    <Button className="button-style" type="submit">
                        Submit
                     </Button>
                </Form>
            </Col>
        </Row>
    );
};

export default Review;