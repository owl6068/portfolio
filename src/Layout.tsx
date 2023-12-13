import About from "./page/About";
import Main from "./page/Main";
import PortFolio from "./page/PortFolio";

function Layout() {
  document.body.style.position = "fixed";
  document.body.style.overflowY = "hidden";
  document.body.style.width = "100%";
  setTimeout(() => {
    document.body.style.position = "static";
    document.body.style.overflow = "unset";
  }, 4500);
  return (
    <>
      <Main id="Main" />
      <About id="About" />
      <PortFolio id="PortFolio" />
    </>
  );
}

export default Layout;
