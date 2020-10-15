import React, { useState } from 'react';
import { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Service from '../Service/Service';

const ProvideService = () => {
    const [allService, setAllService] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/getAllService')
        .then(res => res.json())
        .then(data => setAllService(data))
    },[]);

    const history = useHistory();
    const handleService = (id) => {
        history.push(`/order/${id}`);
    };
    return (
        <main className="my-5">
            <Container>
                <h2 className="text-center font-weight-bold">Provide awesome <span className="text-color">Service</span></h2>
                <Row>
                    {
                       allService.map(service => <Service key={service._id} service={service} handleService={handleService} />) 
                    }
                </Row>
            </Container>
        </main>
    );
};

export default ProvideService;