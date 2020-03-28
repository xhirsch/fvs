import React from "react";
import { Carousel } from "react-responsive-carousel";
import "../../css/carousel.css";

const Held = () => {
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
          <img src={require("../../assets/images/projekte/stockhausen_held_1.png")} />
        </div >
        <div>
          <img src={require("../../assets/images/projekte/stockhausen_held_2.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/projekte/stockhausen_held_3.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/projekte/stockhausen_held_4.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/projekte/stockhausen_held_5.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/projekte/stockhausen_held_6.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/projekte/stockhausen_held_7.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/projekte/stockhausen_held_8.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/projekte/stockhausen_held_9.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/projekte/stockhausen_held_10.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/projekte/stockhausen_held_11.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/projekte/stockhausen_held_12.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/projekte/stockhausen_held_13.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/projekte/stockhausen_held_14.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/projekte/stockhausen_held_15.png")} />
        </div>
      </Carousel >
    </div>
  );
};

export default Held;
