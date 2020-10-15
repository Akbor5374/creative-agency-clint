import React from 'react';
import { Col, Jumbotron } from 'react-bootstrap';

const GetOrder = ({ order }) => {
    return (
        <Col md={6}>
            <Jumbotron style={{ backgroundColor: "white" }}>
                {
                    order.status === false ?
                        <div style={{ width: "130px", height: "30px", backgroundColor: "red" }} className="ml-auto">
                            <h4 className="text-light text-center p-4 text-right d-inline">Pending</h4>
                        </div>
                        :
                        <div style={{ width: "130px", height: "30px", backgroundColor: "green" }} className="ml-auto p-3">
                            <h4 className="text-light text-center p-4 text-right d-inline">Done</h4>
                        </div>
                }
                <h3>{order.title}</h3>
                <p>{order.description}</p>
            </Jumbotron>
        </Col>
    );
};

export default GetOrder;