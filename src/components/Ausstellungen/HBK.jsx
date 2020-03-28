import React from "react";
import { Carousel } from "react-responsive-carousel";
import "../../css/carousel.css";

const HBK = () => {
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
          <img src={require("../../assets/images/ausstellungen/stockhausen_hbk_1.png")} />

          <div className="text-left text-xs ml-12 mt-12">
            <p>Galerie der Hochschule für Bildende Künste Braunschweig</p>
            <p>21. Oktober bis 28. November 2009</p>
          </div>
        </div >
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_hbk_2.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_hbk_3.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_hbk_4.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_hbk_5.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_hbk_6.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_hbk_7.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_hbk_8.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_hbk_9.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_hbk_10.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_hbk_11.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_hbk_12.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_hbk_13.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_hbk_14.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_hbk_15.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_hbk_16.png")} />
        </div>
      </Carousel >
    </div>
  );
};

export default HBK;
