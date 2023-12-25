import { useOutletContext } from "react-router-dom";
import { IChart } from "../../interface/coin";
import { CoinDetail, CoinPriceBox } from "../../css/coinstyle";

function CoinPrace() {
  const { chart } = useOutletContext<IChart>();
  return (
    <CoinPriceBox>
      {chart.map((data, i) => (
        <ul key={"price" + i}>
          <CoinDetail as="li">
            <strong>
              {new Date(data[0]).getFullYear()}년
              {new Date(data[0]).getMonth() + 1}월{new Date(data[0]).getDate()}
              일
            </strong>
            <p>
              <span>open</span>
              {data[1]}
            </p>
            <p>
              <span>high</span>
              {data[2]}
            </p>
            <p>
              <span>low</span>
              {data[3]}
            </p>
            <p>
              <span>close</span>
              {data[4]}
            </p>
          </CoinDetail>
        </ul>
      ))}
    </CoinPriceBox>
  );
}
export default CoinPrace;
