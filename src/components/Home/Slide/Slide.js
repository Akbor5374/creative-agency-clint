import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Slide.css';

const Slide = ({ slideImage }) => {
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };
    return (
        <>
            <AliceCarousel
                mouseTracking
                responsive={responsive}
                autoPlay={true}
                autoPlayInterval={2000}
                infinite={true}
                disableButtonsControls={true}
            >
                {
                    slideImage.map(slideImage =>
                        <div key={slideImage.id} className="item">
                            <img src={slideImage.img} alt="slideImage" />
                        </div>
                    )
                }
            </AliceCarousel>
        </>
    );
};

export default Slide;