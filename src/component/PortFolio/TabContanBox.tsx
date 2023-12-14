import { item } from "../../css/page/PFStyle";
import Title from "../Title";
import {
  BtnFront,
  BtnFrontImg,
  BtnFrontInfo,
  TabBoxLi,
} from "../../css/component/tabStyle";
import { useSetRecoilState } from "recoil";
import { modalPFInfoAtom, modalPFAtom } from "../../utils/atom/commonAtom";
import { DFlex } from "../../css/common";
import { IPortFolioInfo } from "../../utils/interface/PFinterface";
import Tags from "./Tagx";

function TabContanBox(pf: IPortFolioInfo) {
  const setModalShow = useSetRecoilState(modalPFAtom);
  const setModalInfo = useSetRecoilState(modalPFInfoAtom);
  const modalHidden = (info: string) => {
    setModalShow(true);
    setModalInfo(info);
    document.body.style.overflow = "hidden";
  };
  return (
    <TabBoxLi key={pf.id} className="item" variants={item}>
      <button onClick={() => modalHidden(pf.id)}>
        <BtnFront>
          <BtnFrontImg>
            <span className="btn__subject">
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
