import { useQuery } from "react-query";
import { ICoins } from "../../interface/coin";
import { getCoinsApi } from "../../api/coinApi";
import { ExaContainer } from "../../css/Exacommon";
import Loading from "../../../component/Loading";
import { CoinListUl } from "../../css/coinstyle";
import ExaTitle from "../../component/ExaTitle";
import CoinBox from "../../component/coin/CoinBox";
import ExaHeader from "../../component/ExaHeader";

function Coins() {
  const { data, isLoading } = useQuery<ICoins[]>("coins", getCoinsApi);
  return (
    <ExaContainer as={"section"} className="height__auto">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <CoinListUl>
            {data?.map((coin) => (
              <CoinBox key={coin.id} {...coin} />
            ))}
          </CoinListUl>
        </>
      )}
    </ExaContainer>
  );
}
export default Coins;
