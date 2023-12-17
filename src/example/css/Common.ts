import styled from "styled-components";

export const ExampleWrap = styled.div`
  margin: 0 auto;
  max-width: 100%;
  height: 100%;
  overflow-y: auto;
`;
export const ExampleInner = styled.div` 
  padding: 20px;
  height: 100vh;
`
export const ExaContainer = styled(ExampleWrap)`
  max-width: 500px;
  width: 100%;
  min-height: 100vh; // modal view에서 넘처셔 지워야함
  /* height: 100%; */ // modal view에서 딱맞게 나옴
  overflow-y: unset;
`;