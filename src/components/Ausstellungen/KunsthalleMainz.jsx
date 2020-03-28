import React from "react";
import { Carousel } from "react-responsive-carousel";
import "../../css/carousel.css";

const KunsthalleMainz = () => {
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
          <img src={require("../../assets/images/ausstellungen/stockhausen_mainz_1.png")} />

          <div className="text-left text-xs ml-12 mt-12">
            <p>Friedemann von Stockhausen, «Augen der Welt», 2015</p>
            <p className="mb-2">Forster 1754 – 2015, Kunsthalle Mainz</p>
            <p>Lothar Baumgarten, Camille Henrot, Friedemann von Stockhausen</p>
            <p>2. Oktober 2015 – 24. Januar 2016</p>
          </div>
        </div >
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_mainz_2.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_mainz_3.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_mainz_4.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_mainz_5.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_mainz_6.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_mainz_7.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_mainz_8.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_mainz_9.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_mainz_10.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_mainz_11.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_mainz_12.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_mainz_13.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_mainz_14.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_mainz_15.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_mainz_16.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_mainz_17.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_mainz_18.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_mainz_19.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_mainz_20.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_mainz_21.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_mainz_22.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_mainz_23.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_mainz_24.png")} />
        </div>
      </Carousel >
    </div>
  );
};

export default KunsthalleMainz;
