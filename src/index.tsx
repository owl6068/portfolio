import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { myTheme } from "./css/theme";
import { RecoilRoot } from "recoil";
import { QueryClientProvider, QueryClient } from "react-query";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const queryClient = new QueryClient();
root.render(
  <ThemeProvider theme={myTheme}>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter basename="/portfolio">
          <App />
        </BrowserRouter>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </QueryClientProvider>
    </RecoilRoot>
  </ThemeProvider>
);
