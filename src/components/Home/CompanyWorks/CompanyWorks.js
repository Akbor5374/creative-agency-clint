import React from 'react';
import { Container } from 'react-bootstrap';
import Slide from '../Slide/Slide';
import './CompanyWorks.css';
import slideImage1 from '../../../images/carousel-1.png';
import slideImage2 from '../../../images/carousel-2.png';
import slideImage3 from '../../../images/carousel-3.png';
import slideImage4 from '../../../images/carousel-4.png';
import slideImage5 from '../../../images/carousel-5.png';

const CompanyWorks = () => {
    const slideImage=[
        {id: 1, img:slideImage1},
        {id: 2, img:slideImage2},
        {id: 3, img:slideImage3},
        {id: 4, img:slideImage4},
        {id: 5, img:slideImage5}
    ];

    return (
        <section className="company-works-area py-5">
            <Container>
                <h2 className="text-light text-center pt-5">Here are some of <span className="text-color">our works</span></h2>
                <Slide slideImage={slideImage} />
            </Container>
        </section>
    );
};

export default CompanyWorks;