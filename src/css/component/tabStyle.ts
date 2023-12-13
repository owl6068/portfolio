import { motion } from "framer-motion"
import styled from "styled-components"
import { DFlex } from "../common"

export const TabWrap = styled(DFlex)`
  flex-direction: column;
  margin: 0 auto;
  height: 100%;
  gap: 80px;
  transition: max-width .3s;
  @media screen and (max-width: ${props=>props.theme.width.width_s}) {
    gap: 40px;
  }
`
export const TabContant = styled.div`
  flex: 1;
  width: 100%;
  height:100%;
`
export const TabBoxUl = styled(motion.ul)`
  display: grid;
  height:100%;
  grid-template-columns: repeat(2, 1fr);
  gap: 100px 40px;
  @media screen and (max-width: ${props=>props.theme.width.width_m}){
    grid-template-columns: repeat(1, 1fr);
    gap: 40px;
  }
`

export const TabBtnBox = styled(motion.div)`
@keyframes pcFiexdBtn {
  0%{transform:translateY(-100%)}
  100%{transform:translateY(0%)}
}
@keyframes moFiexdBtn {
  0%{transform:translateY(100%)}
  100%{transform:translateY(0%)}
}
  &.fiexed{
    position: fixed;
    left: 0;
    top: 80px;
    width: 100%;
    padding: 20px 0;
    text-align: center;
    background-color: #fff;
    z-index: 9;
    animation: pcFiexdBtn 1 .5s both;
    animation-delay: .2s;
    @media screen and (max-width: ${props=>props.theme.width.width_s}){
      top: unset;
      bottom: 0;
      animation-name: moFiexdBtn;
    }
  }
`
export const TabBtn = styled.button`
  position: relative;
  width: 80px;
  font-size: ${props=>props.theme.font.size_m};
  line-height: 30px;
  transition: all .3s;
  &::before {
    content: "";
    position: absolute;
    left:0;
    top: 0;
    width: 0;
    height: 100%;
    background-color: ${props=>props.theme.colors.ACTIVE};
    z-index: -1;
    transition: all .3s;
  }
  &.isActive {
    color: #fff;
    &::before{
      width: 100%;
    }
  }
  @media screen and (max-width: ${props=>props.theme.width.width_s}){
    font-size: ${props=>props.theme.font.size_ms};
  }
`
export const TabBoxLi = styled(motion.li)`
  width: 100%;
  height: 400px;
  background-color: #fff;
  margin: 0 auto;
  gap: 20px;
  > button {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    transition: scale .3s;
    box-shadow: ${props=>props.theme.boxShadow};
    &:hover{
      scale: 1.05;
    > span{
      &::before{
        opacity: 0;
        }
      }
    }
  }
  @media screen and (max-width: ${props=>props.theme.width.width_m}){
    max-width: 540px;
    height: 300px;
  }
  @media screen and (max-width: ${props=>props.theme.width.width_ss}){
    height: 250px;
  }
`
export const TabBoxIn = styled.span`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  `

export const BtnFront = styled(TabBoxIn)`
  position:relative;
  display: block;
  height: 100%;
  &::before{
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: .5;
    transition: opacity .3s;
    z-index: 1;
  }
  .btn__img__bg{
    object-fit: cover;
  }
`
export const BtnFrontInfo = styled(motion.span)`
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  align-self: stretch;
  width: 100%;
  padding: 10px 20px;
  text-align: left;
  background-color: ${props=>props.theme.colors.LIGHT};
  box-shadow: 0 -5px 24px rgba(0,0,0,.2);
  z-index: 2;
  .btn__title__box{
    width:140px; 
    flex-shrink:0;
    strong {display:block; color:${props=>props.theme.colors.ACTIVE}; word-break:keep-all}
    em {
      display: -webkit-box;
      padding:8px 20px 10px 0; 
      font-size:12px; 
      color:${props=>props.theme.colors.SECONDARY}; 
      font-weight:600;
      overflow: hidden;
      white-space: normal;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      word-break: keep-all;
    };
  }
  .btn__info__Box{
    flex: 1;
    flex-shrink:1;
    padding-left: 20px;
    height: 90px;
    border-left: 1px solid ${props=>props.theme.colors.SECONDARY};
    strong {
      display:block; 
      font-size:12px; 
      color:${props=>props.theme.colors.SECONDARY};
    }
    em {margin:0 8px 0 0; padding:0 3px 0; font-size:14px; font-weight:900;}
    .btn__info {
      display: block;
      padding-bottom:6px;
      margin-bottom:6px;
      > span {display:flex;}
    }
    .text__overflow {
      display: -webkit-box;
      width: 100%;
      overflow: hidden;
      white-space: normal;
      text-overflow: ellipsis;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      word-break: keep-all;
    }
  }
  @media screen and (max-width: ${props=>props.theme.width.width_s}){
    .btn__info__Box {
      flex:2;
      align-self: stretch;
      height: auto;
      > div {display:flex; gap:20px;}
   }
  }
  @media screen and (max-width: 550px){
     .btn__info__Box {
      > span:not(.btn__info) {display:none;}
   }
  }
  @media screen and (max-width:  ${props=>props.theme.width.width_ss}){
    flex-direction: column;
    .btn__title__box {
      width: 100%;
      > em{
        padding: 2px 0 8px;
      }
    }
    .btn__info__Box {
      padding-left: 0;
      border-left: 0;
      .btn__info{
        display: flex;
        align-items: center;
        padding: 8px 0 4px;
        margin-bottom:0;
        border-top: 1px solid #ccc;
        /* background-color: ${props=>props.theme.colors.PRIMARY}; */
        strong{
          flex-shrink: 0;
          padding-right: 10px;
          color:#111;
          text-transform:uppercase;
          font-weight: 700;
          &:after{
            content: " -";
          }
        }
        > span em{
          padding: 0;
          margin: 0;
          font-size:12px;
          font-weight: 700;
        }
      }
    }
  }
`
export const BtnHover = styled(TabBoxIn)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: stretch;
  height: 100%;
  gap: 20px;
  padding: 30px;
`

// 이미지 없는 디자인 start
export const BtnHoverInfo = styled(motion.span)``
export const TabBoxTitle = styled(TabBoxIn)`
  flex-shrink:1;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  img { width:auto; height: 50px}
  span {
    display: block;
    padding:20px 0;
    font-weight: 900;
  }
`
export const TabBoxDesc = styled(TabBoxIn)`
  flex-shrink:0;
  align-items: flex-end;
  justify-content: space-between;
  text-align: right;
  em, strong, span {display: block; }
  strong {font-weight:900}
  .tab__txt { padding:20px 0; line-height:1.3; word-break: keep-all;}
  .tab__date { font-size:14px; font-weight:900 }
`
// 이미지 없는 디자인 end