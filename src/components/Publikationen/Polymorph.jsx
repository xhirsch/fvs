import React from "react";
import { Carousel } from "react-responsive-carousel";
import "../../css/carousel.css";

const Polymorph = () => {
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
          <img src={require("../../assets/images/publikation/stockhausen_polymorph_1.png")} />

          <div className="text-left text-xs ml-12">
            <p>«Polymorph»</p>
            <p>zur Ausstellung im Kunstverein Wolfenbüttel,</p>
            <p>23. November - 28. März 2003</p>
          </div>
        </div >
        <div>
          <img src={require("../../assets/images/publikation/stockhausen_polymorph_2.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/publikation/stockhausen_polymorph_3.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/publikation/stockhausen_polymorph_4.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/publikation/stockhausen_polymorph_5.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/publikation/stockhausen_polymorph_6.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/publikation/stockhausen_polymorph_7.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/publikation/stockhausen_polymorph_8.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/publikation/stockhausen_polymorph_9.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/publikation/stockhausen_polymorph_10.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/publikation/stockhausen_polymorph_11.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/publikation/stockhausen_polymorph_12.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/publikation/stockhausen_polymorph_13.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/publikation/stockhausen_polymorph_14.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/publikation/stockhausen_polymorph_15.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/publikation/stockhausen_polymorph_16.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/publikation/stockhausen_polymorph_17.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/publikation/stockhausen_polymorph_18.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/publikation/stockhausen_polymorph_19.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/publikation/stockhausen_polymorph_20.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/publikation/stockhausen_polymorph_21.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/publikation/stockhausen_polymorph_22.png")} />
        </div>
      </Carousel >
    </div>
  );
};

export default Polymorph;
