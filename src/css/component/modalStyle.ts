import { motion } from "framer-motion"
import styled from "styled-components"

export const ModalWrap = styled.section`
  position: fixed;
  top:0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 15;
`
export const ModalDim = styled.div`
  position: absolute;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.7);
  z-index: 1;
`
export const ModalInner = styled(motion.div)`
  position: relative;
  padding: 30px 40px;
  width: 100%;
  max-width: 600px;
  height: 90vh;
  background-color: ${props=>props.theme.colors.LIGHT};
  z-index: 2;
  overflow: auto;
  @media screen and (max-width: ${props=>props.theme.width.width_s}){
    width: 100%;
    height: 100%;
    padding: 20px;
  }
`
export const ModalClose = styled.div`
  position: sticky;
  top: 0;
  text-align: right;
  z-index: 1;
  button{
    font-size: 26px;
    width: 34px;
    height: 34px;
    line-height: 34px;
    border-radius: 50em;
    background-color: ${props=>props.theme.colors.LIGHT};
  }
  @media screen and (max-width: ${props=>props.theme.width.width_s}){
    button{
      font-size: 20px;
      width: 28px;
      height: 28px;
      line-height: 28px;
    }
  }
`
export const ModalHead = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  h2 {
    order:1;
  }
  .desc__info {
    order:3; 
    padding:20px 0; 
    white-space: pre-wrap;
    word-break:keep-all; 
    line-height:1.4;
    strong {
      display: block;
      padding:10px 0 6px 20px; 
      text-indent: -20px;
      &:first-of-type {
        padding-top:0px;
      }
    }
    p {
      padding-left: 16px;
      padding-bottom: 8px;
      font-size: 14px;
      line-height: 1.3;
      text-indent: -10px;
      &::before {
        content: '-';
        padding-right: 4px;
      }
    }
  }
  .img__link {
    order:2;
    position: relative;
    width: 100%;
    padding: 20% 0;
    margin-top: 20px;
    overflow: hidden;
    border: 1px solid #111;
    &.link {
      &:hover {
        &::before {
          padding-right: 20px;
        }
      }
      &::before {
        content: "사이트 보러가기 >";
        position:absolute;
        right:0;
        bottom:20px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 30px 0 20px;
        border-radius: 50em 0 0 50em;
        font-size: ${props=>props.theme.font.size_s};
        line-height: 40px;
        color: ${props=>props.theme.colors.LIGHT};
        opacity: .7;
        transition: padding .3s;
        background: #111;
        z-index: 1;
      }
    }
    
    img {
      position: absolute;
      left: 50%;
      top: 0;
      transform: translateX(-50%);
      width:100%;
      height: auto;
    }
    @media screen and (max-width: ${props=>props.theme.width.width_s}){
      padding: 30% 0;
      &.link {
        &::before {
          bottom: 10px;
          padding: 0 14px;
          line-height: 32px;
        }
      }
      img {
        width: auto;
        height: 100%;
      }
    }
  }
`
export const ModalBody = styled.div`
  padding: 20px 0 0;
`
export const ModalInfoUl = styled.ul`
  padding: 10px 0;
`
export const ModalInfoLi = styled.li`
  strong {
    display: block;
    padding-bottom: 8px;
    font-size: 20px;
    line-height:24px;
    color: ${props=>props.theme.colors.PRIMARY};
  }
  p {
    line-height:24px; 
  }
  .list__site {
  &__box {
    position: relative;
    padding: 10px 0;
    border: 1px solid #aaa;
    padding: 30px 20px 10px;
    margin: 30px 0;
      > p , a {
        display: flex;
        align-items: flex-start;
        > span {
          &:first-of-type{ flex-shrink:0;
            display:block;
            padding-bottom:8px;
            width:76px;
            font-weight:600}
          &:last-of-type{ flex-shrink:1;
            display:block; 
            word-break:break-word}
        }
      }
      a:hover {
        color: ${props=>props.theme.colors.VUE};
        span{ color: ${props=>props.theme.colors.VUE};}
      }
    }
    &__tit {
      position: absolute;
      left: 10px;
      top: -22px;
      padding: 10px 20px;
      font-size: 18px;
      color: ${props=>props.theme.colors.ACTIVE};
      background-color: ${props=>props.theme.colors.LIGHT};
    }
  }
`

export const ViewWrap = styled(motion.div)`
  margin: 20px 0;
  width: 100%;
  height: 500px;
  
  border: 2px solid #111;
  overflow: auto;
`