import styled from "styled-components";
import { ImgUrlEtcArr } from "../utils/array/ImgUrl";

const Position = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 11;
  img {
    width: 100px;
  }
`;

function Loading() {
  return (
    <Position>
      <img src={ImgUrlEtcArr.loading.url} alt="loading" />
    </Position>
  );
}

export default Loading;
