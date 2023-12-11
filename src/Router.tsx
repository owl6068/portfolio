import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Layout from "./Layout";
import NotFound from "./error/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Layout />,
      },
      {
        path: "portfolio",
        element: <Layout />,
      },
    ],
    errorElement: <NotFound />,
  },
]);
