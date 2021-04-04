import React from "react";
import "../../../stylesheets/pages/indexInfo/infoDesign.scss";

const infoDesign = () => {
  return (
    <div className="containerDesign">
      <div className="containerDesign__contentDesign">
        <div className="containerDesign__areaDevelop"></div>
        <div className="containerDesign__stackDesign">
          <div className="containerDesign__stackDesign-line0"></div>
          <div className="containerDesign__stackDesign-line1"></div>
        </div>
      </div>

      <div className="containerDesign__lineH1">
        <div className="containerDesign__lineH1--box1"></div>
        <div className="containerDesign__lineH1--box1B"></div>
      </div>
      <div className="containerDesign__lineV2">
        <div className="containerDesign__lineV2--box2"></div>
      </div>
      <div className="containerDesign__lineV3">
        <div className="containerDesign__lineV3--box3">
          <div className="containerDesign__lineV3--box3B"></div>
        </div>
      </div>
      <div className="containerDesign__lineD4">
        <div className="containerDesign__lineD4--box4"></div>
      </div>
    </div>
  );
};

export default infoDesign;
