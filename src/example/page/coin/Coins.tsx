import { useQuery } from "react-query";
import { ICoins } from "../../interface/coin";
import { getCoinsApi } from "../../api/coinApi";
import { ExaContainer } from "../../css/Exacommon";
import Loading from "../../../component/Loading";
import { CoinListUl } from "../../css/coinstyle";
import CoinBox from "../../component/coin/CoinBox";

function Coins() {
  const { data, isLoading } = useQuery<ICoins[]>("coins", getCoinsApi);
  return (
    <ExaContainer as={"section"} className="height__auto">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <CoinListUl>
            {data ? (
              data.map((coin) => <CoinBox key={coin.id} {...coin} />)
            ) : (
              <li>데이터를 불러올 수 없습니다.</li>
            )}
          </CoinListUl>
        </>
      )}
    </ExaContainer>
  );
}
export default Coins;
