import { Link } from "react-router-dom";
import {
  HRigBox,
  Head,
  InnerBtw,
  Logo,
  Menu,
  NavMenu,
  Tooltip,
  aniHeadHoverBtn,
} from "../css/component/headerStyle";
import { headerBtn, headerNav } from "../utils/utilArr";
import { motion } from "framer-motion";
import { aniUpDwon } from "../css/page/mainStyle";
import { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import { moWid, windowWidthAtom } from "../utils/atom/commonAtom";

function Header() {
  const wWdith = useRecoilValue(windowWidthAtom);
  const moWidth = useRecoilValue(moWid);
  const [tooltip, setTooltip] = useState(false);
  const [nav, setNav] = useState(false);

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
    e.preventDefault();
    if (wWdith < moWidth) {
      moHamberger();
    }
    const target = window.document.getElementById(
      e.currentTarget.href.split("#")[1]
    );
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onContact();
      }
    };
    window.addEventListener("mousedown", handleClick);
    return () => window.removeEventListener("mousedown", handleClick);
  }, [modalRef]);

  return (
    <Head variants={aniUpDwon} initial="hidden" animate="visible">
      <InnerBtw>
        <Logo initial={false} whileHover={{ scale: 1.2 }}>
          <Link to="/">
            <img src="portfolio/img/smile.svg" alt="" />
          </Link>
        </Logo>
        <NavMenu className={nav ? "openMenu" : ""}>
          {headerNav.map((menu) => (
            <Menu
              href={`#${menu.name}`}
              // href={`/${menu.name}`}
              key={menu.id}
              onClick={(e) => onPress(e)}
              data-to-scrollspy-id={menu.name}
            >
              {menu.name}
            </Menu>
          ))}
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
            <Tooltip ref={modalRef}>
              <a href="tel:010-3386-7068">010.3386.7068</a>
            </Tooltip>
          )}
        </HRigBox>
      </InnerBtw>
    </Head>
  );
}
export default Header;
