import React from 'react';
import { Button, Col, Container, Form, Jumbotron, Row } from 'react-bootstrap';

const AddServiceForm = (props) => {
    const {
        serviceTitle,
        setServiceTitle,
        serviceDes,
        setServiceDes,
        setServiceImg
    } = props;
    return (
        <Container>
            <Form>
                <Jumbotron style={{ backgroundColor: 'white' }}>
                    <Row>
                        <Col md={7}>
                            <Form.Group controlId="title">
                                <Form.Label><b>service tile</b></Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter service tile"
                                    onBlur={(e) => setServiceTitle({ title: e.target.value })}
                                />
                            </Form.Group>
                            <span className="text-danger">{serviceTitle.titleErr}</span>
                            <Form.Group controlId="textarea">
                                <Form.Label><b>Service Description</b></Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    placeholder="enter service description"
                                    onBlur={(e) => setServiceDes({description: e.target.value})}
                                />
                            </Form.Group>
                            <span className="text-danger">{serviceDes.descriptionErr}</span>
                        </Col>
                        <Col md={5}>
                            <Form.Group controlId="file">
                                <Form.Label><b>Service Description</b></Form.Label>
                                <Form.File
                                    id="custom-file"
                                    label="Custom file input"
                                    custom
                                    onChange={(e) => setServiceImg(e.target.files[0])}
                                />
                                    <span className="text-danger">{props.serviceImgErr}</span>
                            </Form.Group>
                        </Col>
                    </Row>
                </Jumbotron>
                <div className="text-right">
                    <Button 
                    type="submit" 
                    variant="success"
                    onClick={props.addService}
                    >Submit</Button>
                </div>
            </Form>
        </Container>
    );
};

export default AddServiceForm;