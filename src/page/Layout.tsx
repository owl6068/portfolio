import { useEffect } from "react";
import About from "./About";
import Main from "./Main";
import PortFolio from "./PortFolio";
import { useRecoilState } from "recoil";
import { mainAniOneMovingAtom } from "../utils/atom/commonAtom";

function Layout() {
  const [mainAniAtom, setMainAniAtom] = useRecoilState(mainAniOneMovingAtom);
  useEffect(() => {
    if (mainAniAtom) {
      document.body.style.position = "fixed";
      document.body.style.overflowY = "hidden";
      document.body.style.width = "100%";
      setTimeout(() => {
        document.body.style.position = "static";
        document.body.style.overflow = "unset";
        setMainAniAtom(false);
      }, 4500);
    }
  }, [mainAniAtom]);
  return (
    <>
      <Main id="Main" />
      <About id="About" />
      <PortFolio id="PortFolio" />
    </>
  );
}

export default Layout;
