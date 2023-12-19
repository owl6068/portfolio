import {
  createBrowserRouter,
  createRoutesFromElements,
  redirect,
} from "react-router-dom";
import App from "./App";
import Layout from "./page/Layout";
import NotFound from "./error/NotFound";
import Coins from "./example/page/coin/Coins";
import ExampleLayout from "./example/ExampleLayout";
import Coin from "./example/page/coin/Coin";
import CoinChart from "./example/component/coin/CoinChart";
import CoinPrice from "./example/component/coin/CoinPrice";
import JoinStep1 from "./example/page/form/JoinStep1";
import JoinStep2 from "./example/page/form/Joinstep2";
import JoinConfirm from "./example/page/form/JoinConfirm";
import ToDo from "./example/page/todo/ToDo";

export const router = createBrowserRouter([
  {
    path: "/portfolio",
    element: <App />,
    children: [
      {
        errorElement: <NotFound />,
        children: [
          {
            path: "joinstep1",
            element: <JoinStep1 />,
          },
          {
            path: "todo",
            element: <ToDo />,
          },
        ],
      },
    ],
  },
]);
// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         errorElement: <App outlet={<NotFound />} />,
//         children: [
//           {
//             path: "portfolio",
//             element: <Layout />,
//             children: [
//               {
//                 path: "coins",
//                 element: <Coins />,
//               },
//               {
//                 path: "coins/:id",
//                 element: <Coin />,
//                 children: [
//                   {
//                     path: "chart",
//                     element: <CoinChart />,
//                   },
//                   {
//                     path: "price",
//                     element: <CoinPrice />,
//                   },
//                 ],
//               },
//               {
//                 path: "coins",
//                 element: <Coins />,
//               },
//               {
//                 path: "coins/:id",
//                 element: <Coin />,
//                 children: [
//                   {
//                     path: "chart",
//                     element: <CoinChart />,
//                   },
//                   {
//                     path: "price",
//                     element: <CoinPrice />,
//                   },
//                 ],
//               },
//               {
//                 path: "joinstep1",
//                 element: <JoinStep1 />,
//               },
//               {
//                 path: "joinstep2",
//                 element: <JoinStep2 />,
//               },
//               {
//                 path: "joinconfirm",
//                 element: <JoinConfirm />,
//               },
//               {
//                 path: "todo",
//                 element: <ToDo />,
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   },
// ]);
