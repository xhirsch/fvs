import React from "react";
import StyledCarousel from "../StyledCarousel";

import img1 from "../../assets/images/projekte/stockhausen_cats_1.jpg";
import img2 from "../../assets/images/projekte/stockhausen_cats_2.jpg";
import img3 from "../../assets/images/projekte/stockhausen_cats_3.jpg";
import img4 from "../../assets/images/projekte/stockhausen_cats_4.jpg";
import img5 from "../../assets/images/projekte/stockhausen_cats_5.jpg";
import img6 from "../../assets/images/projekte/stockhausen_cats_6.jpg";
import img7 from "../../assets/images/projekte/stockhausen_cats_7.jpg";
import img8 from "../../assets/images/projekte/stockhausen_cats_8.jpg";
import img9 from "../../assets/images/projekte/stockhausen_cats_9.jpg";
import img10 from "../../assets/images/projekte/stockhausen_cats_10.jpg";
import CatsText from "./Texte/CatsText";

const Cats = () => {
  return (
    <div>
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
          <CatsText />
        </div>
      </StyledCarousel >

      <div className="text-left text-xs bottom-0 ml-12 mr-12 mb-4 lg:pl-12">
        <p>Friedemann von Stockhausen, «CATSweb», 2018</p>
        <p className="mb-2">Kunst am Bau – Bodengestaltung, Heidelberg</p>
        <p>Universität Heidelberg, Centrum für Asienwissenschaften und Transkulturelle Studien</p>
        <p>Voßstraße 2, 69115 Heidelberg</p>
      </div>
    </div>
  );
};

export default Cats;
