import React from "react";
import StyledCarousel from "../StyledCarousel";

import img1 from "../../assets/images/projekte/stockhausen_held_1.png";
import img2 from "../../assets/images/projekte/stockhausen_held_2.png";
import img3 from "../../assets/images/projekte/stockhausen_held_3.png";
import img4 from "../../assets/images/projekte/stockhausen_held_4.png";
import img5 from "../../assets/images/projekte/stockhausen_held_5.png";
import img6 from "../../assets/images/projekte/stockhausen_held_6.png";
import img7 from "../../assets/images/projekte/stockhausen_held_7.png";
import img8 from "../../assets/images/projekte/stockhausen_held_8.png";
import img9 from "../../assets/images/projekte/stockhausen_held_9.png";
import img10 from "../../assets/images/projekte/stockhausen_held_10.png";
import img11 from "../../assets/images/projekte/stockhausen_held_11.png";
import img12 from "../../assets/images/projekte/stockhausen_held_12.png";
import img13 from "../../assets/images/projekte/stockhausen_held_13.png";
import img14 from "../../assets/images/projekte/stockhausen_held_14.png";
import img15 from "../../assets/images/projekte/stockhausen_held_15.png";

const Held = () => {
  return (
    <div>
      <StyledCarousel
        infiniteLoop
        useKeyboardArrows
        showThumbs={true}
        showStatus={false}
        showIndicators={false}
        emulateTouch
      >
        <div>
          <img alt="" src={img1} />
        </div >
        <div>
          <img alt="" src={img2} />
        </div>
        <div>
          <img alt="" src={img3} />
        </div>
        <div>
          <img alt="" src={img4} />
        </div>
        <div>
          <img alt="" src={img5} />
        </div>
        <div>
          <img alt="" src={img6} />
        </div>
        <div>
          <img alt="" src={img7} />
        </div>
        <div>
          <img alt="" src={img8} />
        </div>
        <div>
          <img alt="" src={img9} />
        </div>
        <div>
          <img alt="" src={img10} />
        </div>
        <div>
          <img alt="" src={img11} />
        </div>
        <div>
          <img alt="" src={img12} />
        </div>
        <div>
          <img alt="" src={img13} />
        </div>
        <div>
          <img alt="" src={img14} />
        </div>
        <div>
          <img alt="" src={img15} />
        </div>
      </StyledCarousel >
    </div>
  );
};

export default Held;
