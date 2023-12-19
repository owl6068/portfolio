import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { myTheme } from "./css/theme";
import { RecoilRoot } from "recoil";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import App from "./App";
import { BrowserRouter, HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const queryClient = new QueryClient();
console.log("process.env.PUBLIC_URL", process.env.PUBLIC_URL);
root.render(
  <HashRouter>
    <ThemeProvider theme={myTheme}>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <App />
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </QueryClientProvider>
      </RecoilRoot>
    </ThemeProvider>
  </HashRouter>
);
