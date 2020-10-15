import React, { useContext, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { UserContext } from '../../../App';
import List from '../List/List';
import Sidebar from '../Sidebar/Sidebar';

const ServiceList = () => {
    const [user] = useContext(UserContext);
    const [serviceList, setServiceList] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/getAllUserService')
        .then(res => res.json())
        .then(data => setServiceList(data));
    },[]);
    return (
        <section className="dashboard-style">
            <Row>
                <Col md={3}>
                    <Sidebar />
                </Col>
                <Col md={9}>
                    <div className="d-flex justify-items-between">
                        <h2>Order Service</h2>
                        <h4>{user.email}</h4>
                    </div>
                    <div className="container-style">
                        <List serviceList={serviceList} />
                    </div>
                </Col>
            </Row>
        </section>
    );
};

export default ServiceList;