import { useSetRecoilState } from "recoil";
import { IGetMovieApiresults } from "../../interface/netflix";
import { htmlHidden, modalAtom, slderIdAtom } from "../../atom/netflixAtom";
import { SliderImg, SliderInfo, SliderItem } from "../../css/netflix";
import { getBgimg } from "../../page/netflix/utilImg";
import { DFlex, DFlexBtw } from "../../../css/common";

const aniSliderBox = {
  hover: {
    y: -50,
    scale: 1.15,
    zIndex: 2,
  },
};
function Slider(movie: IGetMovieApiresults) {
  const htmloverflow = useSetRecoilState(htmlHidden);
  const movieModal = useSetRecoilState(slderIdAtom);
  const showModal = useSetRecoilState(modalAtom);
  const modalHandler = (id: string) => {
    movieModal(id);
    showModal((prev) => !prev);
    htmloverflow(true);
  };
  return (
    <>
      <SliderItem
        key={movie.id}
        variants={aniSliderBox}
        initial={false}
        whileHover="hover"
        transition={{ type: "tween", duration: 0.2 }}
      >
        <SliderImg className="slider__img">
          {movie?.poster_path !== null ? (
            <>
              <h4>{movie?.title || movie?.name}</h4>
              <img
                src={getBgimg(movie.poster_path, "w300")}
                alt={movie.title}
              />
            </>
          ) : (
            <p className="noimg">
              <span>영화제목</span>
              <span>{movie.title}</span>
            </p>
          )}
        </SliderImg>
        <SliderInfo
          className="slider__info"
          onClick={() => modalHandler(movie.id + "")}
        >
          <DFlexBtw>
            <DFlex className="btnBox">
              <button type="button">❤</button>
              <button type="button">📢</button>
              <button type="button">👆</button>
              <button type="button">👇</button>
            </DFlex>
            <span className="btnBox">
              <button type="button">✔</button>
            </span>
          </DFlexBtw>
          <DFlex>
            <span className="view">view {movie.vote_count}.</span>
            <span className="point">{Math.floor(movie.vote_average)}</span>
            <span>2 Parts</span>
            <span className="hd">Hd</span>
          </DFlex>
        </SliderInfo>
      </SliderItem>
    </>
  );
}

export default Slider;
