import { useState } from "react";
import leftArrow from "../../assets-img/leftArrow.png";
import rightArrow from "../../assets-img/rightArrow.png";

const pictures = [
  "/assets-img/bckImg.webp",
  "/assets-img/Vallery1.jpg",
  "/assets-img/Vallery2.jpg",
  "/assets-img/Vallery3.webp",
];

const Carousel = () => {
  const [pictureIndex, setPictureIndex] = useState(0);

  const handleNextClick = () => {
    if (pictureIndex < pictures.length - 1) {
      setPictureIndex(pictureIndex + 1);
    } else {
      setPictureIndex(0);
    }
  };

  const handlePrevClick = () => {
    if (pictureIndex > 0) {
      setPictureIndex(pictureIndex - 1);
    } else {
      setPictureIndex(pictures.length - 1);
    }
  };

  return (
    <section className="carousel">
      <img
        className="carrousel_pic"
        src={pictures[pictureIndex]}
        alt="carrousel_pic"
      />
      {pictures.length > 1 && (
        <img
          className="carrousel_leftArrow"
          src={leftArrow}
          alt="leftArrow"
          onClick={handlePrevClick}
        />
      )}
      {pictures.length > 1 && (
        <img
          className="carrousel_rightArrow"
          src={rightArrow}
          alt="rightArrow"
          onClick={handleNextClick}
        />
      )}
      <span className="carrousel_count">
        {pictureIndex + 1}/{pictures.length}
      </span>
    </section>
  );
};

export default Carousel;
