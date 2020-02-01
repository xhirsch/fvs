import React from 'react';
// Import React-Slick-Slider
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { render } from 'react-dom';

const photos = [
    {
        name: 'Photo 1',
        url: "https://friedemannvonstockhausen.de/images/graz/stockhausen_graz_01.jpg",
    },
    {
        name: 'Photo 2',
        url: "https://friedemannvonstockhausen.de/images/graz/stockhausen_graz_02.jpg",
    },
    {
        name: 'Photo 3',
        url: "https://friedemannvonstockhausen.de/images/graz/stockhausen_graz_03.jpg",
    },
]

class Graz extends React.Component {
    render() {
        var settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
        };
        return (
          <div className="flex flex-col h-screen w-full">
              <div className="p-24">
                <Slider {...settings} className="bg-yellow-200">
                    {photos.map((photo) => {
                        return(
                            <div className="">
                                <img src={photo.url}/>
                            </div>
                        )
                    })}               
                </Slider>
              </div>
              <div className="bg-blue-200 h-12 mt-30">
                  <p>Text</p>
              </div>
          </div>
        );
      }
}

export default Graz;