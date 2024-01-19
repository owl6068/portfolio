import { useEffect } from "react";
import About from "./About";
import Main from "./Main";
import PortFolio from "./PortFolio";
import Header from "../component/Header";

function Layout() {
  const hasExecutedOnce = JSON.parse(
    sessionStorage.getItem("hasExecutedOnce") || "false"
  );
  useEffect(() => {
    // localhost저장 첫 한번 실행
    if (!hasExecutedOnce) {
      document.body.style.position = "fixed";
      document.body.style.overflowY = "hidden";
      document.body.style.width = "100%";
      setTimeout(() => {
        document.body.style.position = "static";
        document.body.style.overflow = "unset";
        sessionStorage.setItem("hasExecutedOnce", "true");
      }, 4500);
    }
  }, []);

  useEffect(() => {
    // 사용자의 스크롤 위치를 기억
    const handleScroll = () => {
      sessionStorage.setItem(
        "scrollPosition",
        JSON.stringify({ x: window.scrollX, y: window.scrollY })
      );
    };

    window.addEventListener("scroll", handleScroll);

    const savedPosition = sessionStorage.getItem("scrollPosition");
    if (savedPosition) {
      const parsedPosition = JSON.parse(savedPosition);
      window.scrollTo(parsedPosition.x, parsedPosition.y);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <Main id="Main" />
      <About id="About" />
      <PortFolio id="PortFolio" />
    </>
  );
}

export default Layout;
