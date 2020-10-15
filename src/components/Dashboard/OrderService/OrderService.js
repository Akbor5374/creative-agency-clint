import React, { useContext, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import OrderServiceForm from './OrderServiceForm';

const OrderService = () => {
    const { serviceId } = useParams();
    const [user] = useContext(UserContext);
    const [service, setService] = useState({});
    const {title, description} = service;
    const history = useHistory();

    useEffect(() => {
        fetch(`http://localhost:5000/getSingleService/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [serviceId]);

   const [orderInfo, setOrderInfo] = useState({});
    useEffect( () => {
        const newOrderInfo = {
            name: user.name,
            email: user.email,
            title, description,
            status: false
        };
        setOrderInfo(newOrderInfo);
    },[user,title,description]);

    const handleOrder = (e) => {
        const newOrder = { ...orderInfo };
        newOrder[e.target.name] = e.target.value;
    };
    
    const handleSubmit = (e) => {
       e.preventDefault();
       fetch('http://localhost:5000/addOrderService', {
           method: 'POST',
           headers: {'Content-Type': 'application/json'},
           body: JSON.stringify(orderInfo)
       })
       .then(res => res.json())
       .then(data  => console.log(data));
       history.push('/userService');
    };
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
                        <OrderServiceForm handleSubmit={handleSubmit} handleOrder={handleOrder} user={user} service={service} />
                    </div>
                </Col>
            </Row>
        </section>
    );
};

export default OrderService;