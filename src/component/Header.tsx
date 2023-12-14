import { Link } from "react-router-dom";
import {
  HRigBox,
  Head,
  InnerBtw,
  Logo,
  NavMenu,
  Tooltip,
  aniHeadHoverBtn,
} from "../css/component/headerStyle";
import { headerBtn, headerNav } from "../utils/array/utilArr";
import { motion } from "framer-motion";
import { aniUpDwon } from "../css/page/mainStyle";
import { useEffect, useRef, useState } from "react";
import Scrollspy from "react-scrollspy";
import { useRecoilValue } from "recoil";
import { windowWidthAtom } from "../utils/atom/commonAtom";
import { ImgUrlEtcArr } from "../utils/array/ImgUrl";

function Header() {
  const windowWidth = useRecoilValue(windowWidthAtom);
  const [tooltip, setTooltip] = useState(false);
  const [nav, setNav] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const moHamberger = () => {
    // 모바일 배경 클릭시 닫힘
    if (nav === false) {
      document.body.style.overflow = "hidden";
      setNav(true);
    } else {
      document.body.style.overflow = "unset";
      setNav(false);
    }
  };

  const onContact = () => {
    setTooltip((prev) => !prev);
  };

  const onPress = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // 메뉴 클릭시 scroll
    e.preventDefault();
    const target = window.document.getElementById(
      e.currentTarget.href.split("#")[1]
    );
    if (target) {
      target.scrollIntoView({ behavior: "auto" });
    }
    setNav(false);
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
    <Head variants={aniUpDwon} initial="hidden" animate="visible">
      <InnerBtw>
        <Logo initial={false} whileHover={{ scale: 1.2 }}>
          <Link to="#Main" onClick={(e) => onPress(e)}>
            <img src={ImgUrlEtcArr.smile.url} alt="" />
          </Link>
        </Logo>
        <NavMenu className={nav ? "openMenu" : ""}>
          <Scrollspy
            items={["Main", "About", "PortFolio"]}
            currentClassName="isActive"
            componentTag="div"
          >
            {headerNav.map((menu) => (
              <Link
                to={`#${menu.name}`}
                key={menu.id}
                onClick={(e) => onPress(e)}
              >
                {menu.name}
              </Link>
            ))}
          </Scrollspy>
        </NavMenu>
        <HRigBox>
          {headerBtn.map((btn, i) => (
            <button
              className={"hmenu" + i}
              key={btn.id}
              onClick={btn.name === "연락처" ? onContact : moHamberger}
            >
              <svg>
                <motion.path
                  d="m 20 40 L 0 20 L 20 0 L 40 20 Z"
                  fill="transparent"
                  stroke="#666"
                  strokeWidth="1"
                  variants={aniHeadHoverBtn}
                  initial="initial"
                  whileHover="whileHover"
                />
              </svg>
              <span>
                <img src={btn.img} alt={btn.name} />
              </span>
            </button>
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
