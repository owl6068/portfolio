import { GlobalStyle } from "../css/reset";
import { Outlet } from "react-router-dom";
import { ExampleWrap } from "./css/Exacommon";

function ExampleLayout() {
  return (
    <ExampleWrap>
      <GlobalStyle />
      <Outlet />
    </ExampleWrap>
  );
}

export default ExampleLayout;
