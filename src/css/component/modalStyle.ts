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
  padding: 80px;
  width: 100%;
  max-width: ${props=>props.theme.width.width_m};
  height: calc(100% - 200px);
  background-color: ${props=>props.theme.colors.LIGHT};
  z-index: 2;
  overflow: auto;
  @media screen and (max-width: ${props=>props.theme.width.width_s}){
    width: 100%;
    height: 100%;
    padding: 50px 20px;
  }
`
export const ModalClose = styled.button`
  position: absolute;
  right: 40px;
  top: 40px;
  font-size: 30px;
  @media screen and (max-width: ${props=>props.theme.width.width_s}){
    top: 5px;
    right:20px;
    font-size: 20px;
    padding: 5px;
  }
`
export const ModalHead = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  h2{order:2; padding-top:20px;}
  p{order:3; padding-top:20px; white-space: pre-wrap; word-break:keep-all; line-height:1.4;}
  .img__link{
    position: relative;
    width: 100%;
    padding: 20% 0;
    overflow: hidden;
    border: 1px solid #111;
    order:1;
    &.link{
      &:hover{
        &::before{
          opacity: .7;
        }
      }
      &::before{
        content: "사이트 보러가기 >";
        position:absolute;
        left:0;
        top:0;
        display: flex;
        align-items: center;
        justify-content: center;
        width:100%;
        height:100%;
        font-size: ${props=>props.theme.font.size_l};
        color: ${props=>props.theme.colors.LIGHT};
        opacity: 0;
        transition: opacity .3s;
        background: #111;
      }
    }
    img{
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width:100%;
      height: auto;
    }
    @media screen and (max-width: ${props=>props.theme.width.width_s}){
      padding: 30% 0;
      img{
        width: auto;
        height: 100%;
      }
    }
  }
`
export const ModalBody = styled.div`
  padding: 40px 0 0;
`
export const ModalInfoUl = styled.ul`
  padding: 10px 0;
  li{
    strong {
      display: block;
      padding-bottom: 8px;
      font-size: 20px;
      line-height:24px;
      color: ${props=>props.theme.colors.PRIMARY};
    }
    p{
      line-height:24px; 
    }
    .list__site{
     &__box{
      position: relative;
       padding: 10px 0;
       border: 1px solid #aaa;
       padding: 30px 20px 10px;
       margin: 30px 0;
        > p {
          display: flex;
          align-items: flex-start;
          > span{
            &:first-of-type{flex-shrink:0; display:block; padding-bottom:8px; width:76px; font-weight:600}
            &:last-of-type{flex-shrink:1; display:block; word-break:break-word}
          }
        }
      }
      /* &__tit{
        > span{
          &:last-of-type{color:${props=>props.theme.colors.ACTIVE}}
        }
      } */
      &__tit{
        position: absolute;
        left: 10px;
        top: -22px;
        padding: 10px 20px;
        font-size: 18px;
        color:${props=>props.theme.colors.ACTIVE};
        background-color: ${props=>props.theme.colors.LIGHT};
      }
    }
  }
`

export const ViewWrap = styled(motion.div)`
margin: 20px 0;
border:2px solid #111

`