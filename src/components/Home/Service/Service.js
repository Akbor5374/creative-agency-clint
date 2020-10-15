import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Service.css';

const Service = ({ service,handleService }) => {
    return (
        <Col style={{width: '100%'}} lg={4} md={6} sm={12} className="mt-5">
            <Card className="service-card" onClick={() => handleService(service._id)}>
                <Card.Body className='text-center'>
                    <div className='service-image m-auto'>
                        <img src={`data:image/png;base64,${service.img.img}`} alt="serviceImage" />
                    </div>
                    <Card.Title className='mt-4 mb-4'>{service.title}</Card.Title>
                    <Card.Text>{service.description}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;