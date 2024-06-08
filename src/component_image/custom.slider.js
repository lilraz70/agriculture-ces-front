import React, { useState, useEffect } from "react";
import "./custom.slider.css";

function CustomCarousel({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDone, setSlideDone] = useState(true);
  const [timeID, setTimeID] = useState(null);

  useEffect(() => {
    let timer;
    if (slideDone) {
      timer = setTimeout(() => {
        slideNext();
      }, 5000);
    }
    return () => {
      clearTimeout(timer);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slideDone]); 

  const slideNext = () => {
    setActiveIndex((val) => {
      if (val >= children.length - 1) {
        return 0;
      } else {
        return val + 1;
      }
    });
    setSlideDone(true); // Marquer la transition comme terminée une fois terminée.
  };

  const slidePrev = () => {
    setActiveIndex((val) => {
      if (val <= 0) {
        return children.length - 1;
      } else {
        return val - 1;
      }
    });
    setSlideDone(true); // Marquer la transition comme terminée une fois terminée.
  };

  const AutoPlayStop = () => {
    clearTimeout(timeID); // Arrêter le délai d'attente lorsque la souris survole le composant.
    setSlideDone(false); // Marquer la transition comme non terminée.
  };

  const AutoPlayStart = () => {
    if (!slideDone) {
      setTimeID(
        setTimeout(() => {
          slideNext();
        }, 5000)
      );
      setSlideDone(true); // Marquer la transition comme terminée.
    }
  };

  return (
    <div
      className="container__slider"
      onMouseEnter={AutoPlayStop}
      onMouseLeave={AutoPlayStart}
    >
      {children.map((item, index) => {
        return (
          <div
            className={"slider__item slider__item-active-" + (activeIndex + 1)}
            key={index}
          >
            {item}
          </div>
        );
      })}

      <div className="container__slider__links">
        {children.map((item, index) => {
          return (
            <button
              key={index}
              className={
                activeIndex === index
                  ? "container__slider__links-small container__slider__links-small-active"
                  : "container__slider__links-small"
              }
              onClick={(e) => {
                e.preventDefault();
                setActiveIndex(index);
              }}
            ></button>
          );
        })}
      </div>

      <button
        className="slider__btn-next"
        onClick={(e) => {
          e.preventDefault();
          slideNext();
        }}
      >
        {">"}
      </button>
      <button
        className="slider__btn-prev"
        onClick={(e) => {
          e.preventDefault();
          slidePrev();
        }}
      >
        {"<"}
      </button>
    </div>
  );
}

export default CustomCarousel;
