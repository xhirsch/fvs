import React from "react";
import { Carousel } from "react-responsive-carousel";
import "../../css/carousel.css";

const Cartagena = () => {
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
          <img src={require("../../assets/images/ausstellungen/stockhausen_cartagena_1.png")} />

          <div className="text-left text-xs ml-12 mt-12">
            <p>Friedemann von Stockhausen, «Present Perfect»</p>
            <p className="mb-2">Lothar Baumgarten, «Aliento»</p>
            <p>Bienal Internacional de Arte Contemporáneo Cartagena de Indias</p>
            <p>7. Februar - 7. April 2014</p>
          </div>
        </div >
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_cartagena_2.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_cartagena_3.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_cartagena_4.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_cartagena_5.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_cartagena_6.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_cartagena_7.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_cartagena_8.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_cartagena_9.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_cartagena_10.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_cartagena_11.png")} />
        </div>
      </Carousel >
    </div>
  );
};

export default Cartagena;
