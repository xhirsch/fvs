import React from "react";
import StyledCarousel from "../StyledCarousel";

import img1 from "../../assets/images/ausstellungen/stockhausen_hbk_01.jpg";
import img2 from "../../assets/images/ausstellungen/stockhausen_hbk_02.jpg";
import img3 from "../../assets/images/ausstellungen/stockhausen_hbk_03.jpg";
import img4 from "../../assets/images/ausstellungen/stockhausen_hbk_04.jpg";
import img5 from "../../assets/images/ausstellungen/stockhausen_hbk_05.jpg";
import img6 from "../../assets/images/ausstellungen/stockhausen_hbk_06.jpg";
import img7 from "../../assets/images/ausstellungen/stockhausen_hbk_07.jpg";
import img8 from "../../assets/images/ausstellungen/stockhausen_hbk_08.jpg";
import img9 from "../../assets/images/ausstellungen/stockhausen_hbk_09.jpg";
import img10 from "../../assets/images/ausstellungen/stockhausen_hbk_10.jpg";
import img11 from "../../assets/images/ausstellungen/stockhausen_hbk_11.jpg";
import img12 from "../../assets/images/ausstellungen/stockhausen_hbk_12.jpg";
import img13 from "../../assets/images/ausstellungen/stockhausen_hbk_13.jpg";
import img14 from "../../assets/images/ausstellungen/stockhausen_hbk_14.jpg";
import img15 from "../../assets/images/ausstellungen/stockhausen_hbk_15.jpg";

const HBK = () => {
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
        </div>
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
      </StyledCarousel>

      <div className="text-left text-xs bottom-0 ml-12 mr-12 mb-4 lg:pl-12">
        <p>Galerie der Hochschule für Bildende Künste Braunschweig</p>
        <p>21. Oktober bis 28. November 2009</p>
      </div>
    </div>
  );
};

export default HBK;
