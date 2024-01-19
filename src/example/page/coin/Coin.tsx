import { Link, Outlet, useParams } from "react-router-dom";
import { ExaContainer } from "../../css/Exacommon";
import { useQuery } from "react-query";
import { getCoinApi, getCoinChartApi } from "../../api/coinApi";
import ExaTitle from "../../component/ExaTitle";
import Loading from "../../../component/Loading";
import { ICoin } from "../../interface/coin";
import { CoinDetail, CoinTabBtn } from "../../css/coinstyle";
import { DFlex } from "../../../css/common";

function Coin() {
  const param = useParams();
  const { data: coin, isLoading: coinLoading } = useQuery<ICoin>("coin", () =>
    getCoinApi(String(param.id))
  );
  const { data: chart, isLoading: chartLoading } = useQuery("chartOHLC", () =>
    getCoinChartApi(String(param.id))
  );
  const loading = coinLoading && chartLoading;
  return (
    <ExaContainer>
      {loading ? (
        <Loading />
      ) : (
        <>
          <CoinDetail>
            {coin ? (
              <>
                <DFlex>
                  <img src={coin.image.small} alt={coin.name} />
                  <div className="coin__box">
                    <ExaTitle as="h2" text={coin?.name} />
                    <p className="coin__info lank">
                      <span>Rank.</span>
                      <strong>{coin.market_cap_rank}</strong>
                    </p>
                  </div>
                </DFlex>
                <div className="coin__info desc">
                  <span>desc.</span>
                  <p className="coin__over-text">
                    {coin.description.ko.length === 0
                      ? coin.description.en
                      : coin.description.ko}
                  </p>
                </div>
                {coin.genesis_date && (
                  <div className="coin__info start">
                    <span>start.</span>
                    {coin.genesis_date}
                  </div>
                )}
              </>
            ) : (
              <div>데이터를 불러올 수 없습니다.</div>
            )}
          </CoinDetail>
          <CoinTabBtn>
            <Link to="chart" state={{ data: chart }}>
              Chart
            </Link>
            <Link to="price" state={{ data: chart }}>
              Price
            </Link>
          </CoinTabBtn>

          <Outlet context={{ chart: chart }} />
        </>
      )}
    </ExaContainer>
  );
}
export default Coin;
