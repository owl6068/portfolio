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
  display: flex;
  height:100%;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  gap: 100px 40px ;
  li {
    width: calc(50% - 20px);
  }
  @media screen and (max-width: ${props=>props.theme.width.width_m}){
    gap: 40px;
    li {
      width: 100%;
    }
  }
`

export const TabBtnBox = styled(motion.div)`
  position: static;
  width: 100%;
  padding: 20px 0;
  text-align: center;
  background-color: #fff;
  z-index: 9;
  &.fiexed{
    position:fixed;
    left: 0;
    top: 80px;
  }
  @media screen and (max-width: ${props=>props.theme.width.width_s}){
    &.fiexed{
      top: 70px;
    }
  }
`
export const TabBtn = styled.button`
  position: relative;
  width: 100px;
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
    width: 80px;
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
    height: 350px;
  }
  @media screen and (max-width: ${props=>props.theme.width.width_ss}){
    height: 260px;
  }
`
export const TabBoxIn = styled.span`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  `

export const BtnFront = styled(TabBoxIn)`
  position: relative;
  display: block;
  height: 100%;

`
export const BtnFrontImg = styled.span`
  display: block;
  .btn {
    &__subject {
      position: absolute;
      right: 0;
      top: 0;
      padding: 10px;
      color: ${props=>props.theme.colors.DARK};
      line-height: 30px;
      font-weight: 900;
      background-color: ${props=>props.theme.colors.PRIMARY};
      z-index: 2;
      &.pf{
        font-size: 14px;
        color: ${props=>props.theme.colors.LIGHT};
        background-color: ${props=>props.theme.colors.DARK};
      }
    }
    &__img__bg {
      object-fit: cover;
    }
  }
`
export const BtnFrontInfo = styled.span`
  position: absolute;
  left: 0;
  bottom: 0;
  align-self: stretch;
  width: 100%;
  height: 146px;
  padding: 10px 20px;
  text-align: left;
  background-color: ${props=>props.theme.colors.LIGHT};
  box-shadow: 0 -5px 24px rgba(0,0,0,.2);
  z-index: 2;
  .btn__title__box {
    display: block;
    strong {
      display:block; 
      word-break:keep-all
    }
    em {
      display: -webkit-box;
      padding:4px 20px 10px 0; 
      font-size:14px; 
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
  .btn__info__Box {
    display: block;
    > span {
      flex-wrap: wrap;
    }
    .tag {
      display:block;
      padding: 0 10px;
      margin: 2px 4px 2px 0;
      font-size: 14px;
      line-height: 24px;
      color: ${props=>props.theme.colors.ACTIVE};
      border:1px solid ${props=>props.theme.colors.ACTIVE};
      white-space: nowrap;
      &:first-child{ 
        color:#fff; 
        background-color:${props=>props.theme.colors.ACTIVE};
      }
    }
  }
  @media screen and (max-width:  ${props=>props.theme.width.width_ss}){
    height: auto;
    .btn__info__Box{
      > span {
        flex-wrap: nowrap;
        overflow: hidden;
      }
      .tag {
        padding: 0 5px;
        margin: 2px 4px 2px 0;
        font-size: 12px;
        line-height: 20px;
        &:first-child{ 
          color:#fff; 
          background-color:${props=>props.theme.colors.ACTIVE};
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
export const tabBtnFixed = {
  initial: {
    opacity:0,
    y:'-100%'
  },
  animate: {
    opacity:1,
    y:'0%'
  },
};