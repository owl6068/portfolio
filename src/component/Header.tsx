import { Link } from "react-router-dom";
import {
  HRigBox,
  Head,
  InnerBtw,
  Logo,
  NavMenu,
  Tooltip,
} from "../css/component/headerStyle";
import { headerBtn } from "../utils/array/utilArr";
import { aniUpDwon } from "../css/page/mainStyle";
import { useEffect, useRef } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { windowWidthAtom } from "../utils/atom/commonAtom";
import { ImgUrlEtcArr } from "../utils/array/ImgUrl";
import HRhombusBtn from "./header/HRhombusBtn";
import { navMenuAtom, toolTipAtom } from "../utils/atom/headerAtom";
import HNavMenu from "./header/HNavMenu";

function Header() {
  const windowWidth = useRecoilValue(windowWidthAtom);
  const [tooltip, setTooltip] = useRecoilState(toolTipAtom);
  const [navMenu, setNavMenu] = useRecoilState(navMenuAtom);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const mainAniAtom = JSON.parse(
    sessionStorage.getItem("hasExecutedOnce") || "false"
  );

  const onPress = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // 메뉴 클릭시 scroll
    e.preventDefault();
    const target = window.document.getElementById(
      e.currentTarget.href.split("#")[1]
    );
    if (target) {
      // target.scrollIntoView({ behavior: "auto" });
    }
    setNavMenu(false);
    document.body.style.overflow = "unset";
  };

  useEffect(() => {
    //외부영역 클릭시 tootip 닫히기
    const handleClick = (e: MouseEvent) => {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(e.target as Node)
      ) {
        setTooltip(false);
      }
    };
    window.addEventListener("mousedown", handleClick);
    return () => window.removeEventListener("mousedown", handleClick);
  }, [tooltipRef]);

  useEffect(() => {
    //resize tooltop 닫기
    setTooltip(false);
  }, [windowWidth]);

  return (
    <Head
      variants={aniUpDwon}
      initial={mainAniAtom ? "visible" : "hidden"}
      animate="visible"
    >
      <InnerBtw>
        <Logo initial={false} whileHover={{ scale: 1.2 }}>
          <Link to="#Main" onClick={(e) => onPress(e)}>
            <img src={ImgUrlEtcArr.smile.url} alt="" />
          </Link>
        </Logo>
        <NavMenu className={navMenu ? "openMenu" : ""}>
          <HNavMenu />
        </NavMenu>
        <HRigBox>
          {headerBtn.map((btn, i) => (
            <HRhombusBtn key={btn.id} {...btn} i={i} />
          ))}
          {tooltip && (
            <Tooltip ref={tooltipRef}>
              <a href="tel:010-3386-7068">010.3386.7068</a>
            </Tooltip>
          )}
        </HRigBox>
      </InnerBtw>
    </Head>
  );
}
export default Header;
