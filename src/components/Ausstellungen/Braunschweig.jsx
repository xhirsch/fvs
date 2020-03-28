import React from "react";
import { Carousel } from "react-responsive-carousel";
import "../../css/carousel.css";

const Braunschweig = () => {
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
          <img src={require("../../assets/images/ausstellungen/stockhausen_haum_1.png")} />

          <div className="text-left text-xs ml-12 mt-12">
            <p>Herzog Anton Ulrich-Museum, Braunschweig</p>
            <p className="mb-2">Kupferstichkabinett</p>
            <p>2012, Kohle, 14 Zeichnungen, je 104 x 77 cm</p>
            <p>Photographien 1999 -2004</p>
          </div>
        </div >
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_haum_2.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_haum_3.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_haum_4.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_haum_5.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_haum_6.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_haum_7.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_haum_8.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_haum_9.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_haum_10.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_haum_11.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_haum_12.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_haum_13.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_haum_14.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_haum_15.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_haum_16.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_haum_17.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_haum_18.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_haum_19.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_haum_20.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_haum_21.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_haum_22.png")} />
        </div>
      </Carousel >
    </div>
  );
};

export default Braunschweig;
