import React from "react";
import StyledCarousel from "../StyledCarousel";

import img2 from "../../assets/images/ausstellungen/stockhausen_mainz_2.jpg";
import img3 from "../../assets/images/ausstellungen/stockhausen_mainz_3.jpg";
import img4 from "../../assets/images/ausstellungen/stockhausen_mainz_4.jpg";
import img5 from "../../assets/images/ausstellungen/stockhausen_mainz_5.jpg";
import img6 from "../../assets/images/ausstellungen/stockhausen_mainz_6.jpg";
import img7 from "../../assets/images/ausstellungen/stockhausen_mainz_7.jpg";
import img8 from "../../assets/images/ausstellungen/stockhausen_mainz_8.jpg";
import img9 from "../../assets/images/ausstellungen/stockhausen_mainz_9.jpg";
import img10 from "../../assets/images/ausstellungen/stockhausen_mainz_10.jpg";
import img11 from "../../assets/images/ausstellungen/stockhausen_mainz_11.jpg";
import img12 from "../../assets/images/ausstellungen/stockhausen_mainz_12.jpg";
import img13 from "../../assets/images/ausstellungen/stockhausen_mainz_13.jpg";
import img14 from "../../assets/images/ausstellungen/stockhausen_mainz_14.jpg";
import img15 from "../../assets/images/ausstellungen/stockhausen_mainz_15.jpg";
import img16 from "../../assets/images/ausstellungen/stockhausen_mainz_16.jpg";
import img17 from "../../assets/images/ausstellungen/stockhausen_mainz_17.jpg";
import img18 from "../../assets/images/ausstellungen/stockhausen_mainz_18.jpg";
import img19 from "../../assets/images/ausstellungen/stockhausen_mainz_19.jpg";
import img20 from "../../assets/images/ausstellungen/stockhausen_mainz_20.jpg";
import img21 from "../../assets/images/ausstellungen/stockhausen_mainz_21.jpg";
import img22 from "../../assets/images/ausstellungen/stockhausen_mainz_22.jpg";
import img23 from "../../assets/images/ausstellungen/stockhausen_mainz_23.jpg";
import img24 from "../../assets/images/ausstellungen/stockhausen_mainz_24.jpg";
import img25 from "../../assets/images/ausstellungen/stockhausen_mainz_25.jpg";
import MainzText from "./Texte/MainzText";

const KunsthalleMainz = () => {
  return (
    <div>
      <StyledCarousel
        infiniteLoop
        useKeyboardArrows
        showThumbs={false}
        showStatus={true}
        showIndicators={false}
        emulateTouch
        dynamicHeight
      >
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
        <div>
          <img alt="" src={img23} />
        </div>
        <div>
          <img alt="" src={img24} />
        </div>
        <div>
          <img alt="" src={img25} />
        </div>
        <div>
          <MainzText />
        </div>
      </StyledCarousel>

      <div className="text-left text-xs bottom-0 ml-12 mr-12 mb-4 lg:pl-12 pt-8">
        <p>Friedemann von Stockhausen, «Augen der Welt», 2015</p>
        <p className="mb-2">Forster 1754 – 2015, Kunsthalle Mainz</p>
        <p>Lothar Baumgarten, Camille Henrot, Friedemann von Stockhausen</p>
        <p>2. Oktober 2015 – 24. Januar 2016</p>
      </div>
    </div>
  );
};

export default KunsthalleMainz;
