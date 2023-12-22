import styled from "styled-components";

export const ExampleWrap = styled.div`
  margin: 0 auto;
  max-width: 100%;
  height: 100%;
  overflow-y: auto;
  `;

export const ExaContainer = styled(ExampleWrap)`
  max-width: 500px;
  width: 100%;
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