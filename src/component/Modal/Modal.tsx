import {
  ModalWrap,
  ModalDim,
  ModalInner,
  ModalClose,
  ModalHead,
  ModalBody,
  ModalInfoUl,
  ViewWrap,
} from "../../css/component/modalStyle";
import Title from "../Title";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  modalPFAtom,
  filterModalPFIntoSelector,
} from "../../utils/atom/commonAtom";
import { IPortFolioNav } from "../../utils/interface/PFinterface";
import About from "../../page/About";
import { Link } from "react-router-dom";

function Modal() {
  const portfolio = useRecoilValue<IPortFolioNav[]>(filterModalPFIntoSelector);
  const setModalShow = useSetRecoilState(modalPFAtom);
  const modalHidden = () => {
    setModalShow(false);
    document.body.style.overflow = "unset";
  };
  const info = { ...portfolio[0] };
  return (
    <ModalWrap>
      <ModalDim onClick={modalHidden}></ModalDim>
      {info && (
        <ModalInner>
          <ModalClose onClick={modalHidden}>✖</ModalClose>
          <ModalHead style={{ backgroundImage: "" }}>
            <Title as="h2" text={info.title} size={"m"} />
            <p>{info.desc}</p>
            {info.career ? (
              info.link ? (
                <Link to={info.link} target="_blank" className="img__link link">
                  <img src={`portfolio/img/site/${info.bgImg}.png`} alt="" />
                </Link>
              ) : (
                <span className="img__link">
                  <img src={`portfolio/img/site/${info.bgImg}.png`} alt="" />
                </span>
              )
            ) : (
              info.title === "PortFolio" && (
                <span className="img__link">
                  <img src={`portfolio/img/site/${info.bgImg}.png`} alt="" />
                </span>
              )
            )}
          </ModalHead>
          <ModalBody>
            {!info.career && info.title !== "PortFolio" ? (
              <>
                <Title as="h4" text={"view."} size={"ss"} />
                <ViewWrap>
                  <About id="About" />
                </ViewWrap>
              </>
            ) : null}
            <Title as="h4" text={"Description."} size={"ss"} />
            <ModalInfoUl>
              {info.career ? (
                <>
                  <li>
                    <div className="list__site__box">
                      <strong className="list__site__tit">근무기간</strong>
                      <p>{info.date}</p>
                    </div>
                  </li>
                  <li>
                    <div className="list__site__box">
                      <strong className="list__site__tit">skill</strong>
                      <p>{info.skill}</p>
                    </div>
                  </li>
                  <li>
                    <div className="list__site__box">
                      <strong className="list__site__tit">tool</strong>
                      <div>
                        <p>디자인: {info.tool?.design}</p>
                        <p>일정관리: {info.tool?.schedule}</p>
                        <p>협업툴: {info.tool?.collabo}</p>
                      </div>
                    </div>
                  </li>
                  {info.link && (
                    <li>
                      <div className="list__site__box">
                        <strong className="list__site__tit">link</strong>
                        <p>
                          <a href={info.link} target="_blank" className="link">
                            {info.link}
                          </a>
                        </p>
                      </div>
                    </li>
                  )}
                </>
              ) : (
                <>
                  <li>
                    <div className="list__site__box">
                      <strong className="list__site__tit">
                        {info.logoImg === "Vue" ? "Framework" : "library"}
                      </strong>
                      <p>{info.logoImg}</p>
                    </div>
                  </li>
                  <li>
                    <div className="list__site__box">
                      <strong className="list__site__tit">css</strong>
                      <p>{info.css}</p>
                    </div>
                  </li>
                  {info.logoImg === "React" && (
                    <li>
                      <div className="list__site__box">
                        <strong className="list__site__tit">skill</strong>
                        <p>{info.skill}</p>
                      </div>
                    </li>
                  )}
                </>
              )}
            </ModalInfoUl>
            {info.site && (
              <>
                <Title as="h4" text={"Work Site."} size={"ss"} />
                <ModalInfoUl>
                  <li>
                    {info.site.map((data) => (
                      <div className="list__site__box">
                        <strong className="list__site__tit">{data.name}</strong>
                        <p className="list__site__dis">
                          <span>Display</span> <span>{data.display}</span>
                        </p>
                        <p className="list__site__work">
                          <span>Wrok</span> <span>{data.desc}</span>
                        </p>
                        {data.link && (
                          <Link
                            to={data.link}
                            target="_blank"
                            className="list__site__link"
                          >
                            <span>Link</span> <span>{data.link}</span>
                          </Link>
                        )}
                      </div>
                    ))}
                  </li>
                </ModalInfoUl>
              </>
            )}
          </ModalBody>
        </ModalInner>
      )}
    </ModalWrap>
  );
}
export default Modal;
