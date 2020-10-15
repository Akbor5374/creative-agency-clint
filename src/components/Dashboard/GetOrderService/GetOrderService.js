import React, { useContext, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { UserContext } from '../../../App';
import GetOrder from '../GetOrder/GetOrder';
import Sidebar from '../Sidebar/Sidebar';
import './GetOrderService.css';

const GetOrderService = () => {
    const [user] = useContext(UserContext);
    const [getOrderService, setGetOrderService] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/getOrderService?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setGetOrderService(data)
            })
    }, [user]);
    return (
        <section className="dashboard-style">
            <Row>
                <Col md={3}>
                    <Sidebar />
                </Col>
                <Col md={9}>
                    <div className="d-flex justify-items-between">
                        <h2>Service list</h2>
                        <h4>{user.email}</h4>
                    </div>
                    <div className="container-style">
                        <Row>
                            {
                                getOrderService.map(order => <GetOrder key={order._id} order={order} />)
                            }
                        </Row>
                    </div>
                </Col>
            </Row>
        </section>
    );
};

export default GetOrderService;