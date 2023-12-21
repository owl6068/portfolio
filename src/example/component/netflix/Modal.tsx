import { useSetRecoilState } from "recoil";
import { htmlHidden, modalAtom } from "../../atom/netflixAtom";
import { ModalContant, ModalDim, ModalWrap } from "../../css/netflix";
import { getBgimg } from "../../page/netflix/utilImg";
import { DFlex } from "../../../css/common";
const aniMadal = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { delay: 0.1, duration: 0.2 },
  },
  exit: {
    opacity: 0,
    transition: { delay: 0.1, duration: 0.2 },
  },
};
function Modal(movieDetail: any) {
  const htmloverflow = useSetRecoilState(htmlHidden);
  const showModal = useSetRecoilState(modalAtom);
  const closeModal = () => {
    showModal(false);
    htmloverflow(false);
  };
  return (
    <>
      <ModalWrap
        variants={aniMadal}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <ModalDim onClick={closeModal}></ModalDim>
        {movieDetail ? (
          <ModalContant
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.2 }}
          >
            <div className="modal__inner">
              <div className="modal__img-box">
                {movieDetail?.backdrop_path !== null ? (
                  <img
                    src={getBgimg(movieDetail?.backdrop_path || "")}
                    alt=""
                    style={{ width: "100%" }}
                  />
                ) : (
                  <p className="noimg"></p>
                )}
              </div>
              <div className="modal__info-box">
                <h4 className="modal__title">
                  {movieDetail?.title || movieDetail?.name}
                </h4>
                <ul>
                  <li>
                    <span>설명</span>
                    <p> {movieDetail?.overview || "정보가 없습니다."}</p>
                  </li>
                  <li>
                    <span>출시일</span>
                    <p> {movieDetail?.release_date || "정보가 없습니다."}</p>
                  </li>
                  <li className="genres">
                    <span>장르</span>
                    <DFlex as="div">
                      {movieDetail?.genres?.map((data: any) => (
                        <p key={data.id}> {data?.name || "정보가 없습니다."}</p>
                      ))}
                    </DFlex>
                  </li>
                  <li>
                    <span>인기</span>
                    <p>
                      {" "}
                      {Math.floor(movieDetail?.popularity) ||
                        "정보가 없습니다."}
                      위
                    </p>
                  </li>
                  <li>
                    <span>평균</span>
                    <p>
                      {" "}
                      {movieDetail?.vote_average?.toFixed(1) ||
                        "정보가 없습니다."}
                    </p>
                  </li>
                  <li>
                    <span>홈페이지</span>
                    <p> {movieDetail?.homepage || "정보가 없습니다."}</p>
                  </li>
                </ul>
              </div>
            </div>
          </ModalContant>
        ) : null}
      </ModalWrap>
    </>
  );
}

export default Modal;
