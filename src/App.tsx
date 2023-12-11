import { useEffect } from "react";
import { Wrap } from "./css/common";
import { GlobalStyle } from "./css/reset";
import { useSetRecoilState } from "recoil";
import { windowHeightAtom, windowWidthAtom } from "./utils/atom/commonAtom";
import { Outlet } from "react-router-dom";
import Header from "./component/Header";

function App() {
  const setWindowWidthRecoil = useSetRecoilState(windowWidthAtom); //window width
  const setWindowHeightRecoil = useSetRecoilState(windowHeightAtom); //window width
  const setWindowDimensions = () => {
    setWindowWidthRecoil(window.innerWidth);
    setWindowHeightRecoil(window.innerHeight);
  };
  // useEffect(() => {
  //   //새로고침시 상단으로 이동
  //   window.onbeforeunload = function pushRefresh() {
  //     window.scrollTo(0, 0);
  //   };
  // }, []);
  useEffect(() => {
    //현재 화면 width, height 값
    setWindowWidthRecoil(window.innerWidth);
    setWindowHeightRecoil(window.innerHeight);
  }, []);
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
      {/* <Layout /> */}
      <Header />
      <Outlet />
    </Wrap>
  );
}

export default App;
