import React from "react";
import { Carousel } from "react-responsive-carousel";
import "../../css/carousel.css";

const Cats = () => {
  return (
    <div className="h-screen p-12">
      <Carousel
        infiniteLoop
        useKeyboardArrows
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        emulateTouch
        className=""
      >
        <div>
          <img src={require("../../assets/images/projekte/stockhausen_cats_1.png")} />

          <div className="text-left text-xs ml-12">
            <p>Friedemann von Stockhausen, «CATSweb», 2018</p>
            <p className="mb-2">Kunst am Bau – Bodengestaltung, Heidelberg</p>
            <p>Universität Heidelberg, Centrum für Asienwissenschaften und Transkulturelle Studien</p>
            <p>Voßstraße 2, 69115 Heidelberg</p>
          </div>
        </div >
        <div>
          <img src={require("../../assets/images/projekte/stockhausen_cats_2.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/projekte/stockhausen_cats_3.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/projekte/stockhausen_cats_4.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/projekte/stockhausen_cats_5.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/projekte/stockhausen_cats_6.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/projekte/stockhausen_cats_7.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/projekte/stockhausen_cats_8.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/projekte/stockhausen_cats_9.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/projekte/stockhausen_cats_10.png")} />
        </div>
      </Carousel >
    </div>
  );
};

export default Cats;
