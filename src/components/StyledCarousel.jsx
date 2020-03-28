import React from 'react';
import { Carousel } from "react-responsive-carousel";

const divStyles = {
    width: '100%',
    background: 'aquamarine'
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