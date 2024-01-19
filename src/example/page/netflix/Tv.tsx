import { useEffect } from "react";
import { useQuery } from "react-query";
import { AnimatePresence } from "framer-motion";
import { useRecoilValue } from "recoil";
import { htmlHidden, modalAtom, slderIdAtom } from "../../atom/netflixAtom";
import { iGetTvApi } from "../../interface/netflix";
import { getTvApi, getTvDetailApi } from "../../api/netflixApi";
import Header from "../../component/netflix/Header";
import { Conratiner, ItemSection } from "../../css/netflix";
import Loading from "../../../component/Loading";
import Banner from "../../component/netflix/Banner";
import SliderWrap from "../../component/netflix/SliderWrap";
import Modal from "../../component/netflix/Modal";

function Tv() {
  const htmloverflow = useRecoilValue(htmlHidden);
  const modalId = useRecoilValue(slderIdAtom); // slider id
  const modal = useRecoilValue(modalAtom); // modal show
  const { data: popularTv, isLoading: popularLoading } = useQuery<iGetTvApi>(
    ["tv", "popular "],
    getTvApi
  );
  const { data: tvDetail, refetch } = useQuery(
    ["tvDetail", "detail"],
    async () => await getTvDetailApi(modalId)
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
        {popularLoading ? (
          <Loading />
        ) : (
          <>
            {popularTv ? <Banner {...popularTv} /> : null}
            <ItemSection>
              <h3 className="section__title">Popular</h3>
              <SliderWrap {...popularTv} />
            </ItemSection>
          </>
        )}
        <AnimatePresence>
          {popularTv ? modal && <Modal {...tvDetail} /> : null}
        </AnimatePresence>
      </Conratiner>
    </>
  );
}

export default Tv;
