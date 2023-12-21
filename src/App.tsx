import { useEffect, useState } from "react";
import { Wrap } from "./css/common";
import { GlobalStyle } from "./css/reset";
import { useSetRecoilState } from "recoil";
import { windowHeightAtom, windowWidthAtom } from "./utils/atom/commonAtom";
import Header from "./component/Header";
import RoutesConfig from "./RoutesConfig";
import { useLocation, useNavigate } from "react-router-dom";

function App() {
  const { pathname } = useLocation();
  const [notHeaderView, setNotHeaderView] = useState<string[]>(); //header 안보이게
  const setWindowWidthRecoil = useSetRecoilState(windowWidthAtom); //window width
  const setWindowHeightRecoil = useSetRecoilState(windowHeightAtom); //window width
  const setWindowDimensions = () => {
    setWindowWidthRecoil(window.innerWidth);
    setWindowHeightRecoil(window.innerHeight);
  };
  useEffect(() => {
    const page = [
      "/netflix",
      "/netflix/home",
      "/netflix/tv",
      "/netflix/search",
    ];
    setNotHeaderView(page);
  }, [pathname]);
  useEffect(() => {
    //현재 화면 width, height 값
    setWindowWidthRecoil(window.innerWidth);
    setWindowHeightRecoil(window.innerHeight);
  }, [setWindowWidthRecoil, setWindowHeightRecoil]);
  useEffect(() => {
    //화면 창크키 변경때 width, height 값
    window.addEventListener("resize", setWindowDimensions);
    return () => {
      window.removeEventListener("resize", setWindowDimensions);
    };
  }, []);
  return (
    <Wrap className="App">
      <GlobalStyle />
      {notHeaderView?.includes(pathname) ? null : <Header />}
      <RoutesConfig />
    </Wrap>
  );
}

export default App;
