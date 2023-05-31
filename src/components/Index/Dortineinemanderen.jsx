import React from "react";
import StyledCarousel from "../StyledCarousel";

import img1 from "../../assets/images/index/stockhausen_dortineinemanderen_1.jpeg";
import img2 from "../../assets/images/index/stockhausen_dortineinemanderen_2.jpeg";
import img3 from "../../assets/images/index/stockhausen_dortineinemanderen_3.jpeg";
import img4 from "../../assets/images/index/stockhausen_dortineinemanderen_4.jpeg";
import img5 from "../../assets/images/index/stockhausen_dortineinemanderen_5.jpeg";
import img6 from "../../assets/images/index/stockhausen_dortineinemanderen_6.jpeg";
import img7 from "../../assets/images/index/stockhausen_dortineinemanderen_7.jpeg";
import img8 from "../../assets/images/index/stockhausen_dortineinemanderen_8.jpeg";

const Dortineinemanderen = () => {
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

      </StyledCarousel>

      <div className="text-left text-xs bottom-0 ml-12 mr-12 mb-4 lg:pl-12">
        <p>Edition</p>
        <p>HBK Braunschweig, 2002</p>
      </div>

    </div>
  );
};

export default Dortineinemanderen;
