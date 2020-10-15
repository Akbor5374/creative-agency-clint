import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Feedback.css';

const Feedback = ({ feedback }) => {
    return (
        <Col md={6} lg={4} sm={12} className="mt-5">
            <Card>
                <Card.Body>
                    <div className="user-details d-flex">
                        <div className="ml-3 d-flex align-items-center">
                            <div>
                                <Card.Title>{feedback.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{feedback.company}</Card.Subtitle>
                            </div>
                        </div>
                    </div>
                    <Card.Text className="text-justify mt-3">{feedback.description}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Feedback;