import styled from "styled-components";
import { DFlexBtw } from "../../css/common";
import { motion } from "framer-motion";

export const CoinListUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  margin-top: 30px;
  gap: 30px 30px;
  @media screen and (max-width: ${props=>props.theme.width.width_m}){
    grid-template-columns: repeat(2,1fr);
  }
`;
export const CoinListLi = styled.li`
  align-items: stretch;
  border: 1px solid #222;
`;
export const CoinInfoBox = styled.div`
  a {
    display: block;
    padding: 20px;
    text-align: center;
    img {
      width: 100%;
      margin-bottom: 20px;
    }
  }
`;
export const CoinDetail = styled(motion.div)`
  padding: 20px;
  border: 2px solid #ffcf20;
  border-radius: 10px;
  > div {
    gap: 40px;
  }
  img {
    width: 100px;
  }
  .coin{
    &__box {
      &:first-child{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
      }
    }
    &__info {
      padding-top: 20px;
      &:not(.lank){
        span{display:block}
      }
      span{
        font-weight: 900;
        padding-bottom: 8px;
      }
    }
    &__over-text{
      height: 200px;
      overflow: auto;
    }
  }
`
export const CoinTabBtn = styled(DFlexBtw)`
  gap: 10px;
  a {
    display: block;
    flex: 1;
    margin: 20px 0;
    line-height: 50px;
    font-weight: bold;
    text-align: center;
    border:2px solid #ffcf20;
    border-radius: 10px;
    &:hover{
      background-color: #ffcf20;
    }
  }
`
export const CoinPriceBox = styled.div`
  padding: 0 20px 20px;
  height: 400px;
  background-color: #eee;
  border-radius: 10px;
  overflow: auto;
  li{
    margin: 20px 0 0;
    background-color:${props=>props.theme.colors.LIGHT};
    strong{
      display: block;
      padding-bottom: 6px;
    }
    p{
      padding: 3px 0;
      span{
        display: inline-flex;
        padding-right:10px;
        margin-right:10px;
        width: 60px;
        border-right: 1px solid #ddd;
      }
    }
  }
`