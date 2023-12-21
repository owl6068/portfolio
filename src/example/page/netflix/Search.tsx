import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { htmlHidden, modalAtom, slderIdAtom } from "../../atom/netflixAtom";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { IGetMovieDtailApi, IGetSearchApi } from "../../interface/netflix";
import { getMovieDetailApi, getMovieSearchApi } from "../../api/netflixApi";
import { useEffect } from "react";
import Header from "../../component/netflix/Header";
import { Conratiner, ItemSection } from "../../css/netflix";
import Loading from "../../../component/Loading";
import SliderWrap from "../../component/netflix/SliderWrap";
import { AnimatePresence } from "framer-motion";
import Modal from "../../component/netflix/Modal";

const SearchBox = styled.div`
  padding: 150px 35px;
  color: #f1f1f1;
  font-size: 30px;
`;
function Search() {
  const htmloverflow = useRecoilValue(htmlHidden);
  const modalId = useRecoilValue(slderIdAtom); // slider id
  const modal = useRecoilValue(modalAtom);
  const { state } = useLocation();
  const { data, isLoading } = useQuery<IGetSearchApi>("setch", async () =>
    getMovieSearchApi(state)
  );
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
  return (
    <>
      <Header />
      <Conratiner>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <SearchBox>검색어: {state}</SearchBox>
            <ItemSection>
              <SliderWrap {...data} />
            </ItemSection>
          </>
        )}
        <AnimatePresence>
          {isLoading ? null : modal && <Modal {...movieDetail} />}
        </AnimatePresence>
      </Conratiner>
    </>
  );
}

export default Search;
