import React from "react";
import { Carousel } from "react-responsive-carousel";
import "../../css/carousel.css";

const Philharmonie = () => {
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
          <img src={require("../../assets/images/ausstellungen/stockhausen_philharmonie_1.png")} />

          <div className="text-left text-xs ml-12 mt-12">
            <p className="mb-2">«Emanuel Feuermann»</p>
            <p>Foyer Kammermusiksaal,</p>
            <p>Philharmonie Berlin 2006</p>
          </div>
        </div >
      </Carousel >
    </div>
  );
};

export default Philharmonie;
