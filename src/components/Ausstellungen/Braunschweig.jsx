import React from "react";
import StyledCarousel from "../StyledCarousel";

import img1 from "../../assets/images/ausstellungen/stockhausen_haum_01.jpg";
import img2 from "../../assets/images/ausstellungen/stockhausen_haum_02.jpg";
import img3 from "../../assets/images/ausstellungen/stockhausen_haum_03.jpg";
import img4 from "../../assets/images/ausstellungen/stockhausen_haum_04.jpg";
import img5 from "../../assets/images/ausstellungen/stockhausen_haum_05.jpg";
import img6 from "../../assets/images/ausstellungen/stockhausen_haum_06.jpg";
import img7 from "../../assets/images/ausstellungen/stockhausen_haum_07.jpg";
import img8 from "../../assets/images/ausstellungen/stockhausen_haum_08.jpg";
import img9 from "../../assets/images/ausstellungen/stockhausen_haum_09.jpg";
import img10 from "../../assets/images/ausstellungen/stockhausen_haum_10.jpg";
import img11 from "../../assets/images/ausstellungen/stockhausen_haum_11.jpg";
import img12 from "../../assets/images/ausstellungen/stockhausen_haum_12.jpg";
import img13 from "../../assets/images/ausstellungen/stockhausen_haum_13.jpg";
import img14 from "../../assets/images/ausstellungen/stockhausen_haum_14.jpg";
import img15 from "../../assets/images/ausstellungen/stockhausen_haum_15.jpg";
import img16 from "../../assets/images/ausstellungen/stockhausen_haum_16.jpg";
import img17 from "../../assets/images/ausstellungen/stockhausen_haum_17.jpg";
import img18 from "../../assets/images/ausstellungen/stockhausen_haum_18.jpg";
import img19 from "../../assets/images/ausstellungen/stockhausen_haum_19.jpg";
import img20 from "../../assets/images/ausstellungen/stockhausen_haum_20.jpg";
import img21 from "../../assets/images/ausstellungen/stockhausen_haum_21.jpg";
import img22 from "../../assets/images/ausstellungen/stockhausen_haum_22.jpg";
import HaumText from "./Texte/HaumText";

const Braunschweig = () => {
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
          <HaumText />
        </div>
      </StyledCarousel>

      <div className="text-left text-xs bottom-0 ml-12 mr-12 mb-4 lg:pl-12 pt-8">
        <p>Herzog Anton Ulrich-Museum, Braunschweig</p>
        <p className="mb-2">Kupferstichkabinett</p>
        <p>2012, Kohle, 14 Zeichnungen, je 104 x 77 cm</p>
        <p>Photographien 1999 -2004</p>
      </div>
    </div>
  );
};

export default Braunschweig;
