import React from "react";
import { Carousel } from "react-responsive-carousel";
import "../../css/carousel.css";

const Essen = () => {
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
          <img src={require("../../assets/images/ausstellungen/stockhausen_folkwang_1.png")} />

          <div className="text-left text-xs ml-12 mt-12">
            <p className="mb-2">«Ganze Teile»</p>
            <p>Museum Folkwang Essen</p>
            <p>25. August - 21. Oktober 2012</p>
          </div>
        </div >
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_folkwang_2.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_folkwang_3.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_folkwang_4.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_folkwang_5.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_folkwang_6.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_folkwang_7.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_folkwang_8.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_folkwang_9.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_folkwang_10.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_folkwang_11.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_folkwang_12.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_folkwang_13.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_folkwang_14.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_folkwang_15.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_folkwang_16.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_folkwang_17.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_folkwang_18.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_folkwang_19.png")} />
        </div>
      </Carousel >
    </div>
  );
};

export default Essen;
