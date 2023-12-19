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
function RoutesConfig() {
  return (
    <Routes>
      {/* <Route path="/coins/:id/chart" element={<CoinChart />} />
      <Route path="/coins/:id/price" element={<CoinPrice />} />
      <Route path="/coins/:id" element={<Coin />} /> */}
      <Route path="/portfolio/coins">
        <Route index element={<Coins />} />
        <Route path=":id">
          <Route index element={<Coin />} />
          <Route path="chart" element={<CoinChart />} />
          <Route path="price" element={<CoinPrice />} />
        </Route>
      </Route>
      {/* <Route path="/coins" element={<Coins />} /> */}
      <Route path="/portfolio/joinstep1" element={<JoinStep1 />} />
      <Route path="/portfolio/joinstep2" element={<JoinStep2 />} />
      <Route path="/portfolio/joinconfirm" element={<JoinConfirm />} />
      <Route path="/portfolio/todo" element={<ToDo />} />
      <Route path="/portfolio/todo" element={<ToDo />} />
      <Route path="/portfolio" element={<Layout />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}
export default RoutesConfig;
