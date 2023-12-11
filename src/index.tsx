import ReactDOM from "react-dom/client";
import "./css/reset.ts";
import { ThemeProvider } from "styled-components";
import { myTheme } from "./css/theme";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import { RecoilRoot } from "recoil";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const queryClient = new QueryClient();
root.render(
  <ThemeProvider theme={myTheme}>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </RecoilRoot>
  </ThemeProvider>
);
