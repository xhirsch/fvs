import React from "react";
import StyledCarousel from "../StyledCarousel";

import img1 from "../../assets/images/index/stockhausen_nowald_1.jpeg";
import img2 from "../../assets/images/index/stockhausen_nowald_2.jpeg";
import img3 from "../../assets/images/index/stockhausen_nowald_3.jpeg";
import img4 from "../../assets/images/index/stockhausen_nowald_4.jpeg";
import img5 from "../../assets/images/index/stockhausen_nowald_5.jpeg";
import img6 from "../../assets/images/index/stockhausen_nowald_6.jpeg";
import img7 from "../../assets/images/index/stockhausen_nowald_7.jpeg";
import img8 from "../../assets/images/index/stockhausen_nowald_8.jpeg";
import img9 from "../../assets/images/index/stockhausen_nowald_9.jpeg";
import img10 from "../../assets/images/index/stockhausen_nowald_10.jpeg";
import img11 from "../../assets/images/index/stockhausen_nowald_11.jpeg";
import img12 from "../../assets/images/index/stockhausen_nowald_12.jpeg";
import img13 from "../../assets/images/index/stockhausen_nowald_13.jpeg";
import img14 from "../../assets/images/index/stockhausen_nowald_14.jpeg";
import img15 from "../../assets/images/index/stockhausen_nowald_15.jpeg";

const Nowald = () => {
  return (
    <div>
      <StyledCarousel
        infiniteLoop
        useKeyboardArrows
        showThumbs={true}
        showStatus={true}
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
        <p>Zeichnungen</p>
        <p>Galerie Nowald, Berlin 1999</p>
      </div>

    </div>
  );
};

export default Nowald;
