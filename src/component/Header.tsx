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
} from "../css/header";
import { headerBtn, headerNav } from "../utils/utilArr";
import { motion } from "framer-motion";
import { aniUpDwon } from "../css/Main";
import { useState } from "react";

function Header() {
  const [tooltip, setTooltip] = useState(false);
  const [nav, setNav] = useState(false);

  const onclick = (name: string) => {
    if (name === "연락처") {
      setTooltip((prev) => !prev);
    } else {
      setNav((prev) => !prev);
    }
  };

  const onPress = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const target = window.document.getElementById(
      e.currentTarget.href.split("#")[1]
    );
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Head variants={aniUpDwon} initial="hidden" animate="visible">
      <InnerBtw>
        <Logo initial={false} whileHover={{ scale: 1.2 }}>
          <Link to="/">
            <img src="/img/smile.svg" alt="" />
          </Link>
        </Logo>
        <NavMenu
          className={nav ? "openMenu" : ""}
          onClick={() => setNav(false)}
        >
          {headerNav.map((menu) => (
            <Menu
              href={`#${menu.name}`}
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
              onClick={() => onclick(btn.name)}
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
            <Tooltip>
              <a href="tel:010-3386-7068">010.3386.7068</a>
            </Tooltip>
          )}
        </HRigBox>
      </InnerBtw>
    </Head>
  );
}
export default Header;
