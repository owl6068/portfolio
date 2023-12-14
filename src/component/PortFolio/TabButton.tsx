import { PortFolioBtn } from "../../utils/array/utilArr";
import { useSetRecoilState } from "recoil";
import { portfolioBtnAtom } from "../../utils/atom/portFolioAtom";
import { TabBtn, TabBtnBox } from "../../css/component/tabStyle";
import { useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";

interface Ioffset {
  offset: number;
  moving: any;
}

function TabButton({ offset, moving }: Ioffset) {
  const setTabBgText = useSetRecoilState(portfolioBtnAtom);
  const [tabBtnIndex, setTabBtnIndex] = useState(0);
  const [tabBtnFiexd, setTabBtnFiexd] = useState(false);
  const { scrollY } = useScroll();

  const tabHandler = (name: string, i: number) => {
    const bgText = PortFolioBtn.filter((data) => name === data.name);
    setTabBgText(bgText[0].name);
    setTabBtnIndex(i);
    moving(name);
  };
  useMotionValueEvent(scrollY, "change", (latest) => {
    const fixed = Number(latest) > Number(offset) ? true : false;
    setTabBtnFiexd(fixed);
  });
  return (
    <TabBtnBox className={tabBtnFiexd ? "fiexed" : ""}>
      {PortFolioBtn.map((btn, i) => (
        <TabBtn
          key={btn.id}
          onClick={() => tabHandler(btn.name, i)}
          className={tabBtnIndex === i ? "isActive" : ""}
        >
          {btn.name}
        </TabBtn>
      ))}
    </TabBtnBox>
  );
}

export default TabButton;
