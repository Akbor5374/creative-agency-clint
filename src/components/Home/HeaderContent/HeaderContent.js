import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import image from '../../../images/logos/Frame.png'

const HeaderContent = () => {
    return (
        <Row className="mt-5">
            <Col md={5} className="d-flex align-items-center">
                <div>
                    <h1 className="font-weight-bold mb-4">Let's grow your <br /> Brand to the <br /> Next Level</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga inventore tenetur explicabo aspernatur doloremque blanditiis quod harum soluta fugit voluptatibus.</p>
                    <Button className="button-style mt-4">Hire Us</Button>
                </div>
            </Col>
            <Col md={7}>
                <img width="100%" src={image} alt="frameImage" />
            </Col>
        </Row>
    );
};

export default HeaderContent;