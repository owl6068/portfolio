import { container, item } from "../../css/page/PFStyle";
import Title from "../Title";
import {
  BtnFront,
  BtnFrontImg,
  BtnFrontInfo,
  TabBoxLi,
  TabBoxUl,
} from "../../css/component/tabStyle";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { modalPFInfoAtom, modalPFAtom } from "../../utils/atom/commonAtom";
import { filterPFListSelector } from "../../utils/atom/portFolioAtom";
import { DFlex, DFlexBtw } from "../../css/common";

function TabContanBox() {
  const filterSelector = useRecoilValue(filterPFListSelector);
  const setModalShow = useSetRecoilState(modalPFAtom);
  const setModalInfo = useSetRecoilState(modalPFInfoAtom);
  const modalHidden = (info: string) => {
    setModalShow(true);
    setModalInfo(info);
    document.body.style.overflow = "hidden";
  };

  return (
    <TabBoxUl
      className="container"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {filterSelector?.map((pp, i) => (
        <TabBoxLi key={pp.id} className="item" variants={item}>
          <button onClick={() => modalHidden(pp.id)}>
            <BtnFront>
              <BtnFrontImg>
                <span className="btn__subject">
                  {pp.career ? "Career" : "PortFolio"}
                </span>
                <img className="btn__img__bg" src={pp.bgImg} alt={pp.title} />
              </BtnFrontImg>
              <BtnFrontInfo>
                <span className="btn__title__box">
                  <Title as="strong" size="ss" text={pp.title} />
                  <em>{pp.simply}</em>
                </span>
                <span className="btn__info__Box">
                  <DFlex as="span">
                    {pp.skill.split("/").map((data, i) => (
                      <span className="tag" key={i}>
                        {data}
                      </span>
                    ))}
                  </DFlex>
                </span>
              </BtnFrontInfo>
            </BtnFront>
          </button>
        </TabBoxLi>
      ))}
    </TabBoxUl>
  );
}
export default TabContanBox;
