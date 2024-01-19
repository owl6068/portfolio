import {
  ModalWrap,
  ModalDim,
  ModalInner,
  ModalClose,
  ModalHead,
  ModalBody,
  ModalInfoUl,
} from "../css/component/modalStyle";
import Title from "./Title";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  modalPFAtom,
  filterModalPFIntoSelector,
} from "../utils/atom/commonAtom";
import { IPortFolioInfo } from "../utils/interface/PFinterface";
import MyInfoBox from "./modal/MyInfoBox";
import MyImgBox from "./modal/MyImgBox";

function Modal() {
  const portfolio = useRecoilValue<IPortFolioInfo[]>(filterModalPFIntoSelector);
  const setModalShow = useSetRecoilState(modalPFAtom);
  const modalHidden = () => {
    setModalShow("false");
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
            {info.desc && (
              <ul className="desc__info">
                {info.desc.map((data, i) => (
                  <li key={info.id + "mh"}>
                    <strong>
                      {i + 1}. {data.title}
                    </strong>
                    {data.text.map((text) => (
                      <p key={info.id + "txt"}>{text}</p>
                    ))}
                  </li>
                ))}
              </ul>
            )}
            <MyImgBox
              link={info.link !== null ? true : false}
              href={info.link || ""}
              bgImg={info.bgImg || ""}
              alt={info.title}
              aTarget={info.career ? "_blank" : "_self"}
            />
          </ModalHead>
          <ModalBody>
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
                  <MyInfoBox label="CSS" text={info.css} />
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
