import React from "react";
import { Carousel } from "react-responsive-carousel";
import "../../css/carousel.css";

const Wolfsburg = () => {
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
          <img src={require("../../assets/images/ausstellungen/stockhausen_wolf_1.png")} />

          <div className="text-left text-xs ml-12 mt-12">
            <p className="mb-2">«Interface»</p>
            <p>Städtische Galerie der Stadt Wolfsburg</p>
            <p>21. Januar - 25. Juli 2010</p>
          </div>
        </div >
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_wolf_2.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_wolf_3.png")} />
        </div>
      </Carousel >
    </div>
  );
};

export default Wolfsburg;
