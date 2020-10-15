import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Feedback from '../Feedback/Feedback';

const ClintFeedback = () => {
    const [clintFeedback, setClintFeedback] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/getAllReview')
        .then(response => response.json())
        .then(result => setClintFeedback(result))
    },[]);
    
    return (
        <section className="my-5">
            <Container>
                <h2 className="text-center">Clint <span className="text-color">Feedback</span></h2>
                <Row>
                    {
                        clintFeedback.map(feedback => <Feedback feedback={feedback} />)
                    }
                </Row>
            </Container>
        </section>
    );
};

export default ClintFeedback;