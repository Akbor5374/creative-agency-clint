import React, { useState } from 'react';
import { useContext } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const AccessAdmin = () => {
    const [user] = useContext(UserContext)
    const [adminEmail, setAdminEmail] = useState({
        email: ''
    });
    
    const [msg, setMsg] = useState('');
    const handleAdminSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:5000/addAdmin', {
            method: 'POST',
            headers:  {'Content-Type': 'application/json'},
            body: JSON.stringify(adminEmail)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                setMsg('admin added');
            }
        })
    };

    return (
        <section className="dashboard-style">
            <Row>
                <Col md={3}>
                    <Sidebar />
                </Col>
                <Col md={9}>
                    <div className="d-flex justify-items-between">
                        <h2>Adde Admin</h2>
                        <h4>{user.email}</h4>
                    </div>
                    <div className="container-style">
                        <Row>
                            <Col md={6}>
                                <span className="text-success">{msg}</span>
                                <Form onSubmit={handleAdminSubmit}>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter email"
                                            onBlur={(e) => setAdminEmail({email: e.target.value})}
                                        />
                                    </Form.Group>
                                    <Button className="button-style" type="submit">
                                        Submit
                                      </Button>
                                </Form>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </section>
    );
};

export default AccessAdmin;