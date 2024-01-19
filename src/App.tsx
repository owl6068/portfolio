import { useEffect } from "react";
import { Wrap } from "./css/common";
import { GlobalStyle } from "./css/reset";
import { useSetRecoilState } from "recoil";
import { windowHeightAtom, windowWidthAtom } from "./utils/atom/commonAtom";
import RoutesConfig from "./RoutesConfig";

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
    window.addEventListener("beforeunload", function (event) {
      // 페이지 새로고침 시 sessionStorage 비우기
      sessionStorage.clear();
    });
    return () => {
      window.removeEventListener("resize", setWindowDimensions);
    };
  }, []);

  return (
    <Wrap className="App">
      <GlobalStyle />
      <RoutesConfig />
    </Wrap>
  );
}

export default App;
