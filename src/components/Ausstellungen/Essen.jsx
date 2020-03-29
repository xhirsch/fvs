import React from "react";
import StyledCarousel from "../StyledCarousel";

import img1 from "../../assets/images/ausstellungen/stockhausen_folkwang_1.png";
import img2 from "../../assets/images/ausstellungen/stockhausen_folkwang_2.png";
import img3 from "../../assets/images/ausstellungen/stockhausen_folkwang_3.png";
import img4 from "../../assets/images/ausstellungen/stockhausen_folkwang_4.png";
import img5 from "../../assets/images/ausstellungen/stockhausen_folkwang_5.png";
import img6 from "../../assets/images/ausstellungen/stockhausen_folkwang_6.png";
import img7 from "../../assets/images/ausstellungen/stockhausen_folkwang_7.png";
import img8 from "../../assets/images/ausstellungen/stockhausen_folkwang_8.png";
import img9 from "../../assets/images/ausstellungen/stockhausen_folkwang_9.png";
import img10 from "../../assets/images/ausstellungen/stockhausen_folkwang_10.png";
import img11 from "../../assets/images/ausstellungen/stockhausen_folkwang_11.png";
import img12 from "../../assets/images/ausstellungen/stockhausen_folkwang_12.png";
import img13 from "../../assets/images/ausstellungen/stockhausen_folkwang_13.png";
import img14 from "../../assets/images/ausstellungen/stockhausen_folkwang_14.png";
import img15 from "../../assets/images/ausstellungen/stockhausen_folkwang_15.png";
import img16 from "../../assets/images/ausstellungen/stockhausen_folkwang_16.png";
import img17 from "../../assets/images/ausstellungen/stockhausen_folkwang_17.png";
import img18 from "../../assets/images/ausstellungen/stockhausen_folkwang_18.png";
import img19 from "../../assets/images/ausstellungen/stockhausen_folkwang_19.png";

const Essen = () => {
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
        <div>
          <img alt="" src={img16} />
        </div>
        <div>
          <img alt="" src={img17} />
        </div>
        <div>
          <img alt="" src={img18} />
        </div>
        <div>
          <img alt="" src={img19} />
        </div>
      </StyledCarousel >

      <div className="text-left text-xs bottom-0 ml-12 mr-12 mb-4 lg:pl-12">
        <p className="mb-2">«Ganze Teile»</p>
        <p>Museum Folkwang Essen</p>
        <p>25. August - 21. Oktober 2012</p>
      </div>
    </div>
  );
};

export default Essen;
