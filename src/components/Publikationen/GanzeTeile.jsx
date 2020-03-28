import React from "react";
import { Carousel } from "react-responsive-carousel";
import "../../css/carousel.css";

const GanzeTeile = () => {
  return (
    <div className="h-screen p-12">
      <Carousel
        infiniteLoop
        useKeyboardArrows
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        emulateTouch
        className=""
      >
        <div>
          <img src={require("../../assets/images/publikation/stockhausen_ganzeteile_1.png")} />

          <div className="text-left text-xs ml-12 mt-12">
            <p>«Ganze Teile»</p>
            <p>Museum Folkwang Essen, 2012</p>
          </div>
        </div >
        <div>
          <img src={require("../../assets/images/publikation/stockhausen_ganzeteile_2.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/publikation/stockhausen_ganzeteile_3.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/publikation/stockhausen_ganzeteile_4.png")} />
        </div>
      </Carousel >
    </div>
  );
};

export default GanzeTeile;
