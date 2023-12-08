import ReactDOM from "react-dom/client";
import "./css/reset.ts";
import { ThemeProvider } from "styled-components";
import { myTheme } from "./css/theme";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider theme={myTheme}>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </ThemeProvider>
);
