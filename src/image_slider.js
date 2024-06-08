import React from "react";

import images from "./image/image";

import CustomSlider from "./component_image/custom.slider";

export default function Image() {
  return (
    <div className="App">
      <CustomSlider>
        {images.map((image, index) => {
          return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
        })}
      </CustomSlider>
    </div>
  );
}
