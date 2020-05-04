import React from "react";
import StyledCarousel from "../StyledCarousel";
import "../../css/carousel.css";

import img1 from "../../assets/images/ausstellungen/stockhausen_graz_1.jpg";
import img2 from "../../assets/images/ausstellungen/stockhausen_graz_2.jpg";
import img3 from "../../assets/images/ausstellungen/stockhausen_graz_3.jpg";
import img4 from "../../assets/images/ausstellungen/stockhausen_graz_4.jpg";
import img5 from "../../assets/images/ausstellungen/stockhausen_graz_5.jpg";
import img6 from "../../assets/images/ausstellungen/stockhausen_graz_6.jpg";
import img7 from "../../assets/images/ausstellungen/stockhausen_graz_7.jpg";
import img8 from "../../assets/images/ausstellungen/stockhausen_graz_8.jpg";
import img9 from "../../assets/images/ausstellungen/stockhausen_graz_9.jpg";
import img10 from "../../assets/images/ausstellungen/stockhausen_graz_10.jpg";
import img11 from "../../assets/images/ausstellungen/stockhausen_graz_11.jpg";
import img12 from "../../assets/images/ausstellungen/stockhausen_graz_12.jpg";
import img13 from "../../assets/images/ausstellungen/stockhausen_graz_13.jpg";

import GrazText from "./Texte/GrazText";

const Graz = () => {
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
          <p>Friedemann von Stockhausen, «Sacrificial parts», 2017</p>
          <p className="mb-2">Prometheus Unbound - Der entfesselte Prometheus, Neuen Galerie Graz</p>
          <p>Lothar Baumgarten, Jonathas de Andrade, Clemens von Wedemeyer, Yervant Gianikian + Angela Ricci Lucchi, Aimèe Zito Lema</p>
          <p>23. September 2017 – 03.Dezember 2017</p>
          </div>
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
        <div className="text">
          <GrazText />
        </div>
      </StyledCarousel>
    </div>
  );
};

export default Graz;
