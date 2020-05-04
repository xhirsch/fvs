import React from "react";
import StyledCarousel from "../StyledCarousel";

import img1 from "../../assets/images/ausstellungen/stockhausen_wolf_1.jpg";
import img2 from "../../assets/images/ausstellungen/stockhausen_wolf_2.jpg";
import img3 from "../../assets/images/ausstellungen/stockhausen_wolf_3.jpg";

const Wolfsburg = () => {
  return (
    <div>
      <StyledCarousel
        infiniteLoop
        useKeyboardArrows
        showThumbs={false}
        showStatus={true}
        showIndicators={false}
        emulateTouch
      >
        <div>
          <img alt="" src={img1} />
          <div className="text-left text-xs bottom-0 ml-12 mr-12 mb-4 lg:pl-12 pt-8">
          <p className="mb-2">«Interface»</p>
          <p>Städtische Galerie der Stadt Wolfsburg</p>
          <p>21. Januar - 25. Juli 2010</p>
      </div>
        </div>
        <div>
          <img alt="" src={img2} />
        </div>
        <div>
          <img alt="" src={img3} />
        </div>
      </StyledCarousel>
    </div>
  );
};

export default Wolfsburg;
