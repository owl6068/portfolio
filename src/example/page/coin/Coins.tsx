import { useQuery } from "react-query";
import { Link, Outlet } from "react-router-dom";
import { ICoins } from "../../interface/coin";
import { getCoinsApi } from "../../api/coinApi";
import { ExaContainer } from "../../css/Common";
import Loading from "../../../component/Loading";
import { CoinListUl } from "../../css/Coinstyle";
import ExaTitle from "../../component/ExaTitle";
import { useEffect, useState } from "react";
import CoinBox from "../../component/coin/CoinBox";

function Coins() {
  const { data, isLoading } = useQuery<ICoins[]>("coins", getCoinsApi);
  return (
    <ExaContainer>
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
