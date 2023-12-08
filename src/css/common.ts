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
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  align-items: stretch;
`
export const Inner = styled.div`
  width: 100%;
  padding: 0 30px;
  @media screen and (max-width:850px){
    padding: 15px 20px;
  }
`
  