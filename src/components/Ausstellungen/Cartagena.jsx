import React from "react";
import StyledCarousel from "../StyledCarousel";

import img1 from "../../assets/images/ausstellungen/stockhausen_cartagena_1.png";
import img2 from "../../assets/images/ausstellungen/stockhausen_cartagena_2.png";
import img3 from "../../assets/images/ausstellungen/stockhausen_cartagena_3.png";
import img4 from "../../assets/images/ausstellungen/stockhausen_cartagena_4.png";
import img5 from "../../assets/images/ausstellungen/stockhausen_cartagena_5.png";
import img6 from "../../assets/images/ausstellungen/stockhausen_cartagena_6.png";
import img7 from "../../assets/images/ausstellungen/stockhausen_cartagena_7.png";
import img8 from "../../assets/images/ausstellungen/stockhausen_cartagena_8.png";
import img9 from "../../assets/images/ausstellungen/stockhausen_cartagena_9.png";
import img10 from "../../assets/images/ausstellungen/stockhausen_cartagena_10.png";
import img11 from "../../assets/images/ausstellungen/stockhausen_cartagena_11.png";

const Cartagena = () => {
  return (
    <div className="h-screen">
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
      </StyledCarousel >

      <div className="text-left text-xs bottom-0 ml-12 mr-12 mb-4">
        <p>Friedemann von Stockhausen, «Present Perfect»</p>
        <p className="mb-2">Lothar Baumgarten, «Aliento»</p>
        <p>Bienal Internacional de Arte Contemporáneo Cartagena de Indias</p>
        <p>7. Februar - 7. April 2014</p>
      </div>
    </div>
  );
};

export default Cartagena;
