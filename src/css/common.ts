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
`
export const Section = styled.section`
  display: flex;
  align-items: stretch;
  padding: 80px 0;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  @media screen and (max-width: ${props=>props.theme.width.width_s}){
    padding: 40px 0;
  }
`
export const Inner = styled.div`
  padding: 100px 30px;
  width: 100%;
  @media screen and (max-width:850px){
    padding: 15px 20px;
  }
`
  