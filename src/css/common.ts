import styled from "styled-components"

// ========= module common ==========
export const DBlock = styled.div`
  display: block;
`
export const DGrid = styled.div`
  display: grid;
`
export const DFlex = styled.div`
  display: flex;
  align-items: center;
`
export const DFlexBtw = styled(DFlex)`
  justify-content: space-between;
`

// ========= section common ==========
export const Wrap = styled.div`
  overflow: hidden;
  .overflow {
    overflow: hidden;
    white-space: normal;
    text-overflow: ellipsis;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    word-break: keep-all;
    &.line2 { 
      -webkit-line-clamp: 2;
    }
    &.line3 { 
      -webkit-line-clamp: 3;
    }
  }
`
export const Section = styled.section`
  display: flex;
  align-items: stretch;
  padding: 80px 0;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  &:first-of-type{
    height: calc(100vh - 160px);
  }
  @media screen and (max-width: ${props=>props.theme.width.width_s}){
    padding: 40px 0;
    &:first-of-type{
      height: calc(100vh - 140px);
    }
  }
`
export const Inner = styled.div`
  padding: 100px 30px;
  width: 100%;
  @media screen and (max-width:850px){
    padding: 15px 20px;
  }
`
  