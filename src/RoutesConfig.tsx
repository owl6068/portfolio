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
import Home from "./example/page/netflix/Home";
import Search from "./example/page/netflix/Search";
import Tv from "./example/page/netflix/Tv";
import ExaLayout from "./page/ExaLayout";
function RoutesConfig() {
  return (
    <>
      <Routes>
        <Route element={<ExaLayout />}>
          <Route path="/netflix">
            <Route index element={<Home />} />
            <Route path="/netflix/home" element={<Home />} />
            <Route path="/netflix/tv" element={<Tv />} />
            <Route path="/netflix/search" element={<Search />} />
          </Route>
          <Route path="/coins">
            <Route index element={<Coins />} />
            <Route path=":id" element={<Coin />}>
              <Route>
                <Route path="chart" element={<CoinChart />} />
                <Route path="price" element={<CoinPrice />} />
              </Route>
            </Route>
          </Route>
          <Route path="/joinstep1" element={<JoinStep1 />} />
          <Route path="/joinstep2" element={<JoinStep2 />} />
          <Route path="/joinconfirm" element={<JoinConfirm />} />
          <Route path="/todo" element={<ToDo />} />
        </Route>

        <Route element={<Layout />}>
          <Route path="/" element={<Layout />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
export default RoutesConfig;
