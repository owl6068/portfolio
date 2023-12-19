import styled from "styled-components";

export const ExampleWrap = styled.div`
  margin: 0 auto;
  max-width: 100%;
  height: 100%;
  overflow-y: auto;
  `;

export const ExaContainer = styled(ExampleWrap)`
  padding: 20px;
  max-width: 500px;
  width: 100%;
  min-height: 100vh; 
  overflow-y: unset;
  `;
export const Relative = styled.div`
  position: relative;
`