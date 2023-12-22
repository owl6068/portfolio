import { useQuery } from "react-query";
import { ICoins } from "../../interface/coin";
import { getCoinsApi } from "../../api/coinApi";
import { ExaContainer } from "../../css/Exacommon";
import Loading from "../../../component/Loading";
import { CoinListUl } from "../../css/coinstyle";
import ExaTitle from "../../component/ExaTitle";
import CoinBox from "../../component/coin/CoinBox";

function Coins() {
  const { data, isLoading } = useQuery<ICoins[]>("coins", getCoinsApi);
  return (
    <ExaContainer as={"section"} className="height__auto">
      {isLoading ? (
        <Loading />
      ) : data ? (
        <>
          <ExaTitle as="h1" text="Coin List" size="40px" />
          <CoinListUl>
            {data?.map((coin) => (
              <CoinBox key={coin.id} {...coin} />
            ))}
          </CoinListUl>
        </>
      ) : null}
    </ExaContainer>
  );
}
export default Coins;
