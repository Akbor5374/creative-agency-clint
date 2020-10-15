import React, { useContext, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { UserContext } from '../../../App';
import Review from '../Review/Review';
import Sidebar from '../Sidebar/Sidebar';

const ReviewAgency = () => {
    const [user] = useContext(UserContext);
    const [review, setReview] = useState({});
    const handleInput = (e) => {
        const newReview = { ...review };
        newReview[e.target.name] = e.target.value;
        setReview(newReview);
    };
    const [msg, setMsg] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:5000/addReview', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(review)
        })
            .then(response => response.json())
            .then(result => {
                if (result) {
                    setMsg('review added');
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
                        <h2>Review</h2>
                        <h4>{user.email}</h4>
                    </div>
                    <div className="container-style">
                        <span className="text-success">{msg}</span>
                        <Review handleSubmit={handleSubmit} handleInput={handleInput} />
                    </div>
                </Col>
            </Row>
        </section>
    );
};

export default ReviewAgency;