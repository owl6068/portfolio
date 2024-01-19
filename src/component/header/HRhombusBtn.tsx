import { aniHeadHoverBtn } from "../../css/component/headerStyle";
import { motion } from "framer-motion";
import { useRecoilState, useSetRecoilState } from "recoil";
import { navMenuAtom, toolTipAtom } from "../../utils/atom/headerAtom";
import { IHeaderNav } from "../../utils/interface/PFinterface";
import { ImgUrlEtcArr } from "../../utils/array/ImgUrl";

interface IProps extends IHeaderNav {
  i: number;
}
function RhombusBtn({ id, name, img, i }: IProps) {
  const setTooltip = useSetRecoilState(toolTipAtom);
  const [navMenu, setNavMenu] = useRecoilState(navMenuAtom);

  const moHamberger = () => {
    // 모바일 배경 클릭시 닫힘
    if (navMenu === false) {
      document.body.style.overflow = "hidden";
      setNavMenu(true);
    } else {
      document.body.style.overflow = "unset";
      setNavMenu(false);
    }
  };

  const onContact = () => {
    setTooltip((prev) => !prev);
  };
  return (
    <button
      className={"hmenu" + i}
      onClick={name === "연락처" ? onContact : moHamberger}
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
        {navMenu ? (
          <img src={ImgUrlEtcArr.close.url} alt="close" />
        ) : (
          <img src={img} alt={name} />
        )}
      </span>
    </button>
  );
}
export default RhombusBtn;
