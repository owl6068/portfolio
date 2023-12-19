import { useEffect } from "react";
import { Wrap } from "./css/common";
import { GlobalStyle } from "./css/reset";
import { useSetRecoilState } from "recoil";
import { windowHeightAtom, windowWidthAtom } from "./utils/atom/commonAtom";
import { Outlet, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Layout from "./page/Layout";
function App() {
  const setWindowWidthRecoil = useSetRecoilState(windowWidthAtom); //window width
  const setWindowHeightRecoil = useSetRecoilState(windowHeightAtom); //window width
  const setWindowDimensions = () => {
    setWindowWidthRecoil(window.innerWidth);
    setWindowHeightRecoil(window.innerHeight);
  };
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
      <Header />
      <Outlet />
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </Wrap>
  );
}

export default App;
