import { Link } from "react-router-dom";
import { CoinInfoBox, CoinListLi } from "../../css/Coinstyle";
import ExaTitle from "../ExaTitle";
import { ICoins } from "../../interface/coin";

function CoinBox(coin: ICoins) {
  return (
    <CoinListLi>
      <CoinInfoBox>
        <Link to={`${coin.id}`} state={{ id: coin.id }}>
          <img src={coin.image} alt="" />
          <ExaTitle as="h6" text={coin.name} size="16" />
        </Link>
      </CoinInfoBox>
    </CoinListLi>
  );
}
export default CoinBox;
