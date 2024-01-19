import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Slider from "./Slider";
import { SliderBox, SliderContant } from "../../css/netflix";
const aniSlider = {
  start: (isWay: Boolean) => ({
    x: isWay ? window.outerWidth : -window.outerWidth, // 1920이여서 줄이면 문제 생김
  }),
  ing: { x: 0, transition: { type: "tween", duration: 0.5 } },
  exit: (isWay: Boolean) => ({
    x: isWay ? -window.outerWidth : window.outerWidth,
    transition: { type: "tween", duration: 0.5 },
  }),
};
const sliderRow = 6;
function SliderWrap(movieHome: any) {
  const [pageIndex, setPageIndex] = useState<number>(0); //slider 리랜더링
  const [plusPage, setPlusPage] = useState(true); // 반복클릭막기
  const [way, setWay] = useState(false);
  const onSliderMoving = async (value: string) => {
    if (!plusPage) return;
    if (movieHome) {
      const count = Math.floor(movieHome?.results.length / sliderRow) - 1;
      if (value === "next") {
        next(count);
      } else {
        prev(count);
      }
    }
    togglePlusIndex();
  };

  const next = async (count: number) => {
    await setWay(false);
    setPageIndex((prev) => (count === prev ? 0 : prev + 1));
  };
  const prev = async (count: number) => {
    await setWay(true);
    setPageIndex((prev) => (prev === 0 ? count : prev - 1));
  };

  const togglePlusIndex = () => {
    setPlusPage((prev) => !prev);
  };
  return (
    <SliderContant>
      <AnimatePresence onExitComplete={togglePlusIndex}>
        {movieHome && (
          <SliderBox
            custom={way}
            variants={aniSlider}
            initial="start"
            animate="ing"
            exit="exit"
            key={pageIndex}
          >
            {movieHome?.results
              ?.slice(sliderRow * pageIndex, sliderRow * pageIndex + sliderRow)
              .map((movie: any) => (
                <Slider key={movie.id} {...movie} />
              ))}
          </SliderBox>
        )}
      </AnimatePresence>
      <button
        className="btn__slide prev"
        onClick={() => onSliderMoving("prev")}
      >
        &lsaquo;
      </button>
      <button
        className="btn__slide next"
        onClick={() => onSliderMoving("next")}
      >
        &rsaquo;
      </button>
    </SliderContant>
  );
}
export default SliderWrap;
