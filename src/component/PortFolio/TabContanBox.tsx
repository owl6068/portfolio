import { container, item } from "../../css/page/PFStyle";
import Title from "../Title";
import {
  BtnFront,
  BtnFrontInfo,
  TabBoxLi,
  TabBoxUl,
} from "../../css/component/tabStyle";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { modalPFInfoAtom, modalPFAtom } from "../../utils/atom/commonAtom";
import { filterPortFolioList } from "../../utils/atom/portFolioAtom";
import { DFlexBtw } from "../../css/common";

function TabContanBox() {
  const filterSelector = useRecoilValue(filterPortFolioList);
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
              <img
                className="btn__img__bg"
                src={`portfolio/img/site/${pp.bgImg}.png`}
                alt={pp.title}
              />

              <BtnFrontInfo>
                <span className="btn__title__box">
                  <Title as="strong" size="ss" text={pp.title} />
                  <em>{pp.simply}</em>
                </span>
                <span className="btn__info__Box">
                  <span className="btn__info">
                    <strong>skill</strong>
                    <span>
                      <em className="text__overflow">{pp.skill}</em>
                    </span>
                  </span>
                  {pp.tool && (
                    <DFlexBtw as="span">
                      <span>
                        <strong>디자인</strong>
                        <em>{pp.tool?.design}</em>
                      </span>
                      <span>
                        <strong>일정관리</strong>
                        <em>{pp.tool?.schedule}</em>
                      </span>
                      <span>
                        <strong>협업</strong>
                        <em>{pp.tool?.collabo}</em>
                      </span>
                    </DFlexBtw>
                  )}
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
