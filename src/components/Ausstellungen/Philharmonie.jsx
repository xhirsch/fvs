import React from "react";
import StyledCarousel from "../StyledCarousel";

import img1 from "../../assets/images/ausstellungen/stockhausen_philharmonie_1.png";

const Philharmonie = () => {
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
      </StyledCarousel >

      <div className="text-left text-xs bottom-0 ml-12 mr-12 mb-4 lg:pl-12">
        <p className="mb-2">«Emanuel Feuermann»</p>
        <p>Foyer Kammermusiksaal,</p>
        <p>Philharmonie Berlin 2006</p>
      </div>
    </div>
  );
};

export default Philharmonie;
