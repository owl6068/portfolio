import styled from "styled-components";

export const NotFoundWrap = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 30px;
  height: 100vh;
  text-align: center;
  h2 {
    font-size: 26px;
    line-height: 1.4;
    word-break: keep-all;
    img {
      display: block;
      width: 150px;
      margin: 0 auto 10px;
    }
  }
  p {
    padding-top: 10px;
    font-size: 20px;
    line-height: 1.3;
  }
  a {
    margin-top: 50px;
    width: 200px;
    font-size: 20px;
    line-height: 50px;
    color: #fff;
    border-radius: 8px;
    background-color: ${(props) => props.theme.colors.ACTIVE};
  }
`;