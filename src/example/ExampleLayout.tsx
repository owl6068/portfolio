import Coins from "./page/coin/Coins";
import { ExampleInner, ExampleWrap } from "./css/Common";
import { GlobalStyle } from "../css/reset";
import { Outlet } from "react-router-dom";

function ExampleLayout() {
  return (
    <ExampleWrap>
      <ExampleInner>
        <GlobalStyle />
        <Outlet />
        {/* <Coins /> */}
      </ExampleInner>
    </ExampleWrap>
  );
}

export default ExampleLayout;
