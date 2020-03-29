import React from "react";
import StyledCarousel from "../StyledCarousel";

import img1 from "../../assets/images/publikation/stockhausen_polymorph_1.png";
import img2 from "../../assets/images/publikation/stockhausen_polymorph_2.png";
import img3 from "../../assets/images/publikation/stockhausen_polymorph_3.png";
import img4 from "../../assets/images/publikation/stockhausen_polymorph_4.png";
import img5 from "../../assets/images/publikation/stockhausen_polymorph_5.png";
import img6 from "../../assets/images/publikation/stockhausen_polymorph_6.png";
import img7 from "../../assets/images/publikation/stockhausen_polymorph_7.png";
import img8 from "../../assets/images/publikation/stockhausen_polymorph_8.png";
import img9 from "../../assets/images/publikation/stockhausen_polymorph_9.png";
import img10 from "../../assets/images/publikation/stockhausen_polymorph_10.png";
import img11 from "../../assets/images/publikation/stockhausen_polymorph_11.png";
import img12 from "../../assets/images/publikation/stockhausen_polymorph_12.png";
import img13 from "../../assets/images/publikation/stockhausen_polymorph_13.png";
import img14 from "../../assets/images/publikation/stockhausen_polymorph_14.png";
import img15 from "../../assets/images/publikation/stockhausen_polymorph_15.png";
import img16 from "../../assets/images/publikation/stockhausen_polymorph_16.png";
import img17 from "../../assets/images/publikation/stockhausen_polymorph_17.png";
import img18 from "../../assets/images/publikation/stockhausen_polymorph_18.png";
import img19 from "../../assets/images/publikation/stockhausen_polymorph_19.png";
import img20 from "../../assets/images/publikation/stockhausen_polymorph_20.png";
import img21 from "../../assets/images/publikation/stockhausen_polymorph_21.png";
import img22 from "../../assets/images/publikation/stockhausen_polymorph_22.png";

const Polymorph = () => {
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
        <div>
          <img alt="" src={img20} />
        </div>
        <div>
          <img alt="" src={img21} />
        </div>
        <div>
          <img alt="" src={img22} />
        </div>
      </StyledCarousel >

      <div className="text-left text-xs bottom-0 ml-12 mr-12 mb-4">
        <p>«Polymorph»</p>
        <p>zur Ausstellung im Kunstverein Wolfenbüttel,</p>
        <p>23. November - 28. März 2003</p>
      </div>
    </div>
  );
};

export default Polymorph;
