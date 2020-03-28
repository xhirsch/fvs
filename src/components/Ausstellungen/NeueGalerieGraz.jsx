import React from "react";
import { Carousel } from "react-responsive-carousel";
import "../../css/carousel_new.css";

const Graz = () => {
  return (
    <div className="h-screen p-12">
      <Carousel
        infiniteLoop
        useKeyboardArrows
        showThumbs={true}
        showStatus={false}
        showIndicators={false}
        emulateTouch
        className=""
      >
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_graz_1.png")} />

          <div className="text-left text-xs ml-12 mt-12">
            <p>Friedemann von Stockhausen, «Sacrificial parts», 2017</p>
            <p className="mb-2">Prometheus Unbound - Der entfesselte Prometheus, Neuen Galerie Graz</p>
            <p>Lothar Baumgarten, Jonathas de Andrade, Clemens von Wedemeyer, Yervant Gianikian + Angela Ricci Lucchi, Aimèe Zito Lema</p>
            <p>23. September 2017 – 03.Dezember 2017</p>
          </div>
        </div >
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_graz_2.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_graz_3.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_graz_4.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_graz_5.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_graz_6.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_graz_7.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_graz_8.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_graz_9.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_graz_10.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_graz_11.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_graz_12.png")} />
        </div>
        <div>
          <img src={require("../../assets/images/ausstellungen/stockhausen_graz_13.png")} />
        </div>
      </Carousel >
    </div>
  );
};

export default Graz;
