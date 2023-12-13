import { useRecoilValue } from "recoil";
import About from "./page/About";
import Main from "./page/Main";
import PortFolio from "./page/PortFolio";
import ScrollSpy from "react-ui-scrollspy";
import { windowHeightAtom } from "./utils/atom/commonAtom";

function Layout() {
  const wheight = useRecoilValue(windowHeightAtom);
  document.body.style.position = "fixed";
  document.body.style.overflowY = "scroll";
  document.body.style.width = "100%";
  setTimeout(() => {
    document.body.style.position = "static";
    document.body.style.overflow = "unset";
  }, 4500);

  return (
    <>
      <ScrollSpy
        scrollThrottle={200}
        updateHistoryStack={false}
        offsetBottom={wheight}
        useBoxMethod
      >
        <Main id="Main" />
        <About id="About" />
        <PortFolio id="PortFolio" />
      </ScrollSpy>
    </>
  );
}

export default Layout;
