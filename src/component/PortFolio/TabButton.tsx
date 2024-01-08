import { PortFolioBtn } from "../../utils/array/utilArr";
import { useSetRecoilState } from "recoil";
import { portfolioBtnAtom } from "../../utils/atom/portFolioAtom";
import { TabBtn, TabBtnBox, tabBtnFixed } from "../../css/component/tabStyle";
import { useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";

interface Ioffset {
  offset: number;
}

function TabButton({ offset }: Ioffset) {
  const setTabBgText = useSetRecoilState(portfolioBtnAtom);
  const [tabBtnIndex, setTabBtnIndex] = useState(0);
  const [tabBtnFiexd, setTabBtnFiexd] = useState(false);
  const { scrollY } = useScroll();
  const mainAniAtom = JSON.parse(
    sessionStorage.getItem("hasExecutedOnce") || "false"
  );
  const tabHandler = (name: string, i: number) => {
    const bgText = PortFolioBtn.filter((data) => name === data.name);
    setTabBgText(bgText[0].name);
    setTabBtnIndex(i);
    window.scrollTo(0, offset + 10);
  };
  useMotionValueEvent(scrollY, "change", (latest) => {
    const fixed = Number(latest) > Number(offset) ? true : false;
    setTabBtnFiexd(fixed);
  });
  return (
    <div style={{ height: 70 }}>
      <TabBtnBox
        className={mainAniAtom && tabBtnFiexd ? "fiexed" : ""}
        variants={tabBtnFixed}
        initial={mainAniAtom ? "initial" : "animate"}
        animate="animate"
      >
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
    </div>
  );
}

export default TabButton;
