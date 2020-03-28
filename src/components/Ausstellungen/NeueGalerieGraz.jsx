import React from "react";
import StyledCarousel from "../StyledCarousel";

import img1 from "../../assets/images/ausstellungen/stockhausen_graz_1.png";
import img2 from "../../assets/images/ausstellungen/stockhausen_graz_2.png";
import img3 from "../../assets/images/ausstellungen/stockhausen_graz_3.png";
import img4 from "../../assets/images/ausstellungen/stockhausen_graz_4.png";
import img5 from "../../assets/images/ausstellungen/stockhausen_graz_5.png";
import img6 from "../../assets/images/ausstellungen/stockhausen_graz_6.png";
import img7 from "../../assets/images/ausstellungen/stockhausen_graz_7.png";
import img8 from "../../assets/images/ausstellungen/stockhausen_graz_8.png";
import img9 from "../../assets/images/ausstellungen/stockhausen_graz_9.png";
import img10 from "../../assets/images/ausstellungen/stockhausen_graz_10.png";
import img11 from "../../assets/images/ausstellungen/stockhausen_graz_11.png";
import img12 from "../../assets/images/ausstellungen/stockhausen_graz_12.png";
import img13 from "../../assets/images/ausstellungen/stockhausen_graz_13.png";
import GrazText from "./Texte/GrazText";

const Graz = () => {
  return (
    <div className="h-screen">
      <StyledCarousel
        infiniteLoop
        useKeyboardArrows
        showThumbs={true}
        showStatus={false}
        showIndicators={false}
        emulateTouch
        dynamicHeight
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
          <GrazText />
        </div>
      </StyledCarousel >

      <div className="text-left text-xs bottom-0 ml-12 mr-12 mb-4">
        <p>Friedemann von Stockhausen, «Sacrificial parts», 2017</p>
        <p className="mb-2">Prometheus Unbound - Der entfesselte Prometheus, Neuen Galerie Graz</p>
        <p>Lothar Baumgarten, Jonathas de Andrade, Clemens von Wedemeyer, Yervant Gianikian + Angela Ricci Lucchi, Aimèe Zito Lema</p>
        <p>23. September 2017 – 03.Dezember 2017</p>
      </div>
    </div>
  );
};

export default Graz;
