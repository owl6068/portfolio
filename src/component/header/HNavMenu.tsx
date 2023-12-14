import Scrollspy from "react-scrollspy";
import { headerNav } from "../../utils/array/utilArr";
import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { navMenuAtom } from "../../utils/atom/headerAtom";

function HNavMenu() {
  const setNavMenu = useSetRecoilState(navMenuAtom);
  const onPress = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // 메뉴 클릭시 scroll
    e.preventDefault();
    const target = window.document.getElementById(
      e.currentTarget.href.split("#")[1]
    );
    if (target) {
      target.scrollIntoView({ behavior: "auto" });
    }
    setNavMenu(false);
    document.body.style.overflow = "unset";
  };
  return (
    <Scrollspy
      items={["Main", "About", "PortFolio"]}
      currentClassName="isActive"
      componentTag="div"
    >
      {headerNav.map((menu) => (
        <Link to={`#${menu.name}`} key={menu.id} onClick={(e) => onPress(e)}>
          {menu.name}
        </Link>
      ))}
    </Scrollspy>
  );
}
export default HNavMenu;
