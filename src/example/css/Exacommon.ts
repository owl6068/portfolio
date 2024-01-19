import styled from "styled-components";
const MAXWIDTH = '500px';
export const ExampleWrap = styled.div`
  margin: 0 auto;
  max-width: 100%;
  height: 100%;
  overflow-y: auto;
`;
export const ExaHead = styled.header`
  position: fixed;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  width: 100%;
  max-width: ${MAXWIDTH};
  height: 60px;
  border-radius: 30px 30px 0 0;
  z-index: 10;
  background-color: #fff;
  .head {
    &__left { 
      position: absolute;
      left: 20px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 26px;
      z-index: 1;
    }
    &__center {
      font-size: 20px;
      padding: 0 50px;
    }
  }
`
export const ExaContainer = styled(ExampleWrap)`
  position: relative;
  padding: 80px 20px 100px;
  width: 100%;
  max-width: ${MAXWIDTH};
  overflow-y: unset;
  &:first-of-type{
    &.height__auto{
      height:unset; 
      min-height: 100vh !important;
    }
  }
`;
export const Relative = styled.div`
  position: relative;
`