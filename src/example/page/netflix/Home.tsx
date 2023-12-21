import { useRecoilValue } from "recoil";
import { htmlHidden, modalAtom, slderIdAtom } from "../../atom/netflixAtom";
import { IGetMovieApi, IGetMovieDtailApi } from "../../interface/netflix";
import { useQuery } from "react-query";
import {
  getMovieApi,
  getMovieDetailApi,
  getMovieUpcomingApi,
} from "../../api/netflixApi";
import { useEffect } from "react";
import Header from "../../component/netflix/Header";
import { Conratiner, ItemSection } from "../../css/netflix";
import Loading from "../../../component/Loading";
import Banner from "../../component/netflix/Banner";
import SliderWrap from "../../component/netflix/SliderWrap";
import { AnimatePresence } from "framer-motion";
import Modal from "../../component/netflix/Modal";

function Home() {
  const htmloverflow = useRecoilValue(htmlHidden);
  const modalId = useRecoilValue(slderIdAtom); // slider id
  const modal = useRecoilValue(modalAtom); // modal show
  const { data: movieHome, isLoading: homeLoading } = useQuery<IGetMovieApi>(
    ["movies", "nowPlaying"],
    getMovieApi
  );
  const { data: movieUpComing, isLoading: upComingLoading } =
    useQuery<IGetMovieApi>(["movies", "upComing"], getMovieUpcomingApi);
  const { data: movieDetail, refetch } = useQuery<IGetMovieDtailApi>(
    ["detail", "nowPlayingDetail"],
    async () => await getMovieDetailApi(modalId)
  );

  useEffect(() => {
    if (htmloverflow) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    refetch();
  }, [modalId, modal]);
  const loding = homeLoading && upComingLoading;
  return (
    <>
      <Header />
      <Conratiner>
        {loding ? (
          <Loading />
        ) : (
          <>
            {movieHome ? <Banner {...movieHome} /> : null}
            <ItemSection>
              <h3 className="section__title">now Play</h3>
              <SliderWrap {...movieHome} />
            </ItemSection>
            <ItemSection>
              <h3 className="section__title">UpComming</h3>
              <SliderWrap {...movieUpComing} />
            </ItemSection>
          </>
        )}
        <AnimatePresence>
          {movieHome ? modal && <Modal {...movieDetail} /> : null}
        </AnimatePresence>
      </Conratiner>
    </>
  );
}

export default Home;
