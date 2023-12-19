import { Route, Routes } from "react-router-dom";
import Layout from "./page/Layout";
import NotFound from "./error/NotFound";
import Coins from "./example/page/coin/Coins";
import Coin from "./example/page/coin/Coin";
import CoinChart from "./example/component/coin/CoinChart";
import CoinPrice from "./example/component/coin/CoinPrice";
import JoinStep1 from "./example/page/form/JoinStep1";
import JoinStep2 from "./example/page/form/Joinstep2";
import JoinConfirm from "./example/page/form/JoinConfirm";
import ToDo from "./example/page/todo/ToDo";
import { Helmet } from "react-helmet";
function RoutesConfig() {
  return (
    <>
      <Routes>
        {/* <Route path="/coins/:id/chart" element={<CoinChart />} />
      <Route path="/coins/:id/price" element={<CoinPrice />} />
      <Route path="/coins/:id" element={<Coin />} /> */}
        <Route path="/coins">
          <Route index element={<Coins />} />
          <Route path=":id">
            <Route index element={<Coin />} />
            <Route path="chart" element={<CoinChart />} />
            <Route path="price" element={<CoinPrice />} />
          </Route>
        </Route>
        {/* <Route path="/coins" element={<Coins />} /> */}
        <Route path="/joinstep1" element={<JoinStep1 />} />
        <Route path="/joinstep2" element={<JoinStep2 />} />
        <Route path="/joinconfirm" element={<JoinConfirm />} />
        <Route path="/todo" element={<ToDo />} />
        <Route path="/" element={<Layout />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
}
export default RoutesConfig;
