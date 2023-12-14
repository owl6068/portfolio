import { IPageId } from "../utils/interface/PFinterface";
import {
  PortFolioInner,
  BgText,
  aniBgText,
  BgTextbox,
  container,
} from "../css/page/PFStyle";
import { Section } from "../css/common";
import TabButton from "../component/portfolio/TabButton";
import { useRecoilValue } from "recoil";
import {
  filterPFListSelector,
  portfolioBtnAtom,
} from "../utils/atom/portFolioAtom";
import TabContanBox from "../component/portfolio/TabContanBox";
import Modal from "../component/Modal";
import {
  modalPFAtom,
  windowHeightAtom,
  windowWidthAtom,
} from "../utils/atom/commonAtom";
import { TabBoxUl, TabContant, TabWrap } from "../css/component/tabStyle";
import { useEffect, useRef, useState } from "react";
function PortFolio({ id }: IPageId) {
  const getModalShow = useRecoilValue(modalPFAtom);
  const getTabBgText = useRecoilValue(portfolioBtnAtom);
  const filterSelector = useRecoilValue(filterPFListSelector);
  const getWindowWidth = useRecoilValue(windowWidthAtom);
  const getWindowHeigh = useRecoilValue(windowHeightAtom);
  const offset: any = useRef(null);
  const [offsetbox, setOffsetbox] = useState<number>(0);
  const [moving, setMoving] = useState("");

  useEffect(() => {
    setOffsetbox(offset?.current?.offsetTop + 20);
  }, [getWindowWidth, getWindowHeigh]);

  useEffect(() => {
    window.scrollTo(0, offset?.current?.offsetTop + 20);
  }, [moving]);
  return (
    <Section id={id} ref={offset}>
      <PortFolioInner>
        <BgTextbox
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          <BgText variants={aniBgText} color={getTabBgText}>
            {getTabBgText}
          </BgText>
        </BgTextbox>
        <TabWrap>
          <TabButton offset={offsetbox} moving={setMoving} />
          <TabContant>
            <TabBoxUl
              className="container"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {filterSelector.map((pf) => (
                <TabContanBox key={pf.id} {...pf} />
              ))}
            </TabBoxUl>
          </TabContant>
        </TabWrap>
      </PortFolioInner>
      {getModalShow && <Modal />}
    </Section>
  );
}

export default PortFolio;
