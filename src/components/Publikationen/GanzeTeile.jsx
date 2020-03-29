import React from "react";
import StyledCarousel from "../StyledCarousel";

import img1 from "../../assets/images/publikation/stockhausen_ganzeteile_1.png";
import img2 from "../../assets/images/publikation/stockhausen_ganzeteile_2.png";
import img3 from "../../assets/images/publikation/stockhausen_ganzeteile_3.png";
import img4 from "../../assets/images/publikation/stockhausen_ganzeteile_4.png";

const GanzeTeile = () => {
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
      </StyledCarousel >

      <div className="text-left text-xs bottom-0 ml-12 mr-12 mb-4 lg:pl-12">
        <p>«Ganze Teile»</p>
        <p>Museum Folkwang Essen, 2012</p>
      </div>
    </div>
  );
};

export default GanzeTeile;
