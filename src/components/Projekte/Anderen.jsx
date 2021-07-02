import React from "react";
import StyledCarousel from "../StyledCarousel";

import img0 from "../../assets/images/projekte/stockhausen_ineinemanderen_0.jpg";
import img1 from "../../assets/images/projekte/stockhausen_ineinemanderen_1.jpg";
import img2 from "../../assets/images/projekte/stockhausen_ineinemanderen_2.jpg";
import img3 from "../../assets/images/projekte/stockhausen_ineinemanderen_3.jpg";
import img4 from "../../assets/images/projekte/stockhausen_ineinemanderen_4.jpg";
import img5 from "../../assets/images/projekte/stockhausen_ineinemanderen_5.jpg";
import img6 from "../../assets/images/projekte/stockhausen_ineinemanderen_6.jpg";
import img7 from "../../assets/images/projekte/stockhausen_ineinemanderen_7.jpg";
import CatsText from "./Texte/CatsText";

const Anderen = () => {
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
          <img alt="" src={img0} />
          {/* <div className="absolute bottom-0 text-left text-xs bottom-0 ml-12 mr-12 mb-4 lg:mb-16 lg:pl-12 pt-8">
          <p>Friedemann von Stockhausen, «CATSweb», 2018</p>
          <p className="mb-2">Kunst am Bau – Bodengestaltung, Heidelberg</p>
          <p>Universität Heidelberg, Centrum für Asienwissenschaften und Transkulturelle Studien</p>
          <p>Voßstraße 2, 69115 Heidelberg</p>
          </div> */}
        </div>
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
        {/* <div className="text">
          <CatsText />
        </div> */}
      </StyledCarousel>
    </div>
  );
};

export default Anderen;
