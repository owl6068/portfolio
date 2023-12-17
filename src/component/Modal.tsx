import {
  ModalWrap,
  ModalDim,
  ModalInner,
  ModalClose,
  ModalHead,
  ModalBody,
  ModalInfoUl,
  ViewWrap,
} from "../css/component/modalStyle";
import Title from "./Title";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  modalPFAtom,
  filterModalPFIntoSelector,
} from "../utils/atom/commonAtom";
import { IPortFolioInfo } from "../utils/interface/PFinterface";
import { Link } from "react-router-dom";
import MyInfoBox from "./modal/MyInfoBox";
import MyImgBox from "./modal/MyImgBox";
import ExampleLayout from "../example/ExampleLayout";

function Modal() {
  const portfolio = useRecoilValue<IPortFolioInfo[]>(filterModalPFIntoSelector);
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
          <ModalClose>
            <button onClick={modalHidden}>✖</button>
          </ModalClose>
          <ModalHead style={{ backgroundImage: "" }}>
            <Title as="h2" text={info.title} size={"m"} />
            <p>{info.desc}</p>
            <MyImgBox
              link={info.career ? true : false}
              href={info.link || ""}
              bgImg={info.bgImg || ""}
              alt={info.title}
            />
          </ModalHead>
          <ModalBody>
            {!info.career && (
              <>
                <Title as="h4" text={"view."} size={"ss"} />
                <ViewWrap>
                  <ExampleLayout />
                </ViewWrap>
              </>
            )}
            <Title as="h4" text={"Description."} size={"ss"} />
            <ModalInfoUl>
              {info.career ? (
                <>
                  <MyInfoBox label="근무기간" text={info.date} />
                  <MyInfoBox label="Tool" tool={info.tool} />
                </>
              ) : (
                <>
                  <MyInfoBox
                    label={info.lib === "Vue" ? "Framework" : "Library"}
                    text={info.lib}
                  />
                  <MyInfoBox label="CSS" link={info.css} />
                  {/* {info.lib === "React" && (
                    <MyInfoBox label="Skill" link={info.skill} />
                  )} */}
                </>
              )}
              {info.skill && <MyInfoBox label="Skill" text={info.skill} />}
              {info.link && <MyInfoBox label="Link" link={info.link} />}
            </ModalInfoUl>
            {info.site && (
              <>
                <Title as="h4" text={"Work Site."} size={"ss"} />
                <ModalInfoUl>
                  {info.site.map((data) => (
                    <MyInfoBox
                      label={data.name}
                      site={[data.display, data.desc, data.link || ""]}
                    />
                  ))}
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
