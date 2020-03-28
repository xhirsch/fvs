import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "../css/carousel.css";

const divStyles = {
    width: '100%',
}

const StyledCarousel = ({ children, ...rest }) => {
    return (
        <div style={divStyles}>
            <Carousel
                {...rest}
            >{children}</Carousel>
        </div>)
}

export default StyledCarousel;