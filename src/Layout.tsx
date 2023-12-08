import Header from "./component/Header";
import About from "./page/About";
import Main from "./page/Main";
import PortFolio from "./page/PortFolio";
import ScrollSpy from "react-ui-scrollspy";
function Layout() {
  document.body.style.position = "fixed";
  document.body.style.overflowY = "scroll";
  document.body.style.width = "100%";
  setTimeout(() => {
    document.body.style.position = "static";
    document.body.style.overflow = "unset";
  }, 4500);
  return (
    <>
      <Header />
      <ScrollSpy
        scrollThrottle={200}
        updateHistoryStack={false}
        offsetBottom={100}
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
