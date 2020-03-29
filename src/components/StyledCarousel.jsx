import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "../css/carousel.css";

const StyledCarousel = ({ children, ...rest }) => {
    return (
        <div className="lg:pt-24 lg:pl-12 lg:pr-12">
            <Carousel
                {...rest}
            >{children}</Carousel>
        </div>
    )
}

export default StyledCarousel;