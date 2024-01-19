import { item } from "../../css/page/PFStyle";
import Title from "../Title";
import {
  BtnFront,
  BtnFrontImg,
  BtnFrontInfo,
  TabBoxLi,
} from "../../css/component/tabStyle";
import { useRecoilState, useSetRecoilState } from "recoil";
import { modalPFInfoAtom, modalPFAtom } from "../../utils/atom/commonAtom";
import { DFlex } from "../../css/common";
import { IPortFolioInfo } from "../../utils/interface/PFinterface";
import Tags from "./Tagx";
import { useEffect } from "react";

function TabContanBox(pf: IPortFolioInfo) {
  const [modalShow, setModalShow] = useRecoilState(modalPFAtom);
  const setModalInfo = useSetRecoilState(modalPFInfoAtom);
  const modalHidden = (info: string) => {
    setModalShow("true");
    setModalInfo(info);
    document.body.style.overflow = "hidden";
  };
  useEffect(() => {
    //local storage 저장
    localStorage.setItem("modalShow", modalShow);
  }, [modalShow]);

  return (
    <TabBoxLi key={pf.id} className="item" variants={item}>
      <button onClick={() => modalHidden(pf.id)}>
        <BtnFront>
          <BtnFrontImg>
            <span className={pf.career ? "btn__subject" : "btn__subject pf"}>
              {pf.career ? "Career" : "PortFolio"}
            </span>
            <img className="btn__img__bg" src={pf.bgImg} alt={pf.title} />
          </BtnFrontImg>
          <BtnFrontInfo>
            <span className="btn__title__box">
              <Title as="strong" size="ss" text={pf.title} />
              <em>{pf.simply}</em>
            </span>
            <span className="btn__info__Box">
              <DFlex as="span">
                {pf.skill.split("/").map((data, i) => (
                  <Tags key={i} data={data} />
                ))}
              </DFlex>
            </span>
          </BtnFrontInfo>
        </BtnFront>
      </button>
    </TabBoxLi>
  );
}
export default TabContanBox;
