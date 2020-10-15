import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import clint1 from '../../../images/logos/airbnb.png';
import clint2 from '../../../images/logos/google.png';
import clint3 from '../../../images/logos/netflix.png';
import clint4 from '../../../images/logos/slack.png';
import clint5 from '../../../images/logos/uber.png';
import clint6 from '../../../images/logos/slack.png';

const CompanyClint = () => {
    const clint = [
        {id: 1, img: clint1},
        {id: 2, img: clint2},
        {id: 3, img: clint3},
        {id: 4, img: clint4},
        {id: 5, img: clint5},
        {id: 6, img: clint6}
    ];
    return (
        <section>
            <Container className="mt-5">
                <Row>
                    {
                        clint.map(clint =>
                            <Col key={clint.id} md={2} sm={4} xs={6}  className="text-center mb-3">
                                <img width="60%" height="40px" src={clint.img} alt="clintLogo" />
                            </Col>
                        )
                    }
                </Row>
            </Container>
        </section>
    );
};

export default CompanyClint;