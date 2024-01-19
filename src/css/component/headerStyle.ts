import styled from "styled-components";
import { motion } from "framer-motion";
import { Inner } from "../common";

export const Head = styled(motion.header)`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%; 
  background-color: #fff;
  z-index: 10;
`
export const InnerBtw = styled(Inner)` 
  display: flex;
  align-items: center;
  justify-content: center;
  padding:20px 30px;
  @media screen and (max-width:850px) {
    padding: 15px 20px;
  }
`
export const Logo = styled(motion.div)`
  position: absolute;
  left: 30px;
  top: 20px;
  z-index: 1;
  img {width:25px; height:40px}
  @media screen and (max-width:850px) {
    left: 20px;
    top: 15px;
  }
`
export const NavMenu = styled(motion.div)`
  > nav {
    display: flex;
    align-items: center;
    height: 100%;
    a {
      flex: 1;
      display: block;
      position: relative;
      padding: 0 20px;
      margin: 0 5px;
      min-width: 140px;
      font-size: ${props=>props.theme.font.size_m};
      line-height: 40px;
      font-weight: 600;
      text-align: center;
      &:after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width:0%;
        height: 2px;
        background-color: ${props=>props.theme.colors.ACTIVE};
      }
      &:hover {
        color: ${props=>props.theme.colors.ACTIVE};
      }
      &.isActive {
        color: ${props=>props.theme.colors.ACTIVE};
        &:after {
          width: 100%;
          transition: all .3s;
        }
      }
      @media screen and (max-width:850px){
        display: none;
        width: auto;
        &:after {
          display: none;
        }
        &.isActive {
          display: block;
        }
      }
    }
  }
  &.openMenu {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    > div {
      background-color: rgba(0,0,0,1);
      display: flex;
      flex-direction: column;
      justify-content: center;
      a {
        flex: 0;
        padding: 5px;
        margin: 5px;
        color:${props=>props.theme.colors.LIGHT};
        font-size: ${props=>props.theme.font.size_l};
        text-align: left;
        &:after {
          display: none;
        }
        &.isActive {
          color: ${props=>props.theme.colors.ACTIVE};
        }
        @media screen and (max-width:850px) {
          display: block;
        }
      }
    }
  }
`
export const Menu = styled(motion.a)`

`
export const HRigBox = styled.div`
  position: absolute;
  right: 30px;
  top: 20px;
  z-index: 1;
  > button {
      position: relative;
      width: 40px;
      height: 40px;
      & + button { margin-left: 20px;}
      &:hover {
        span {
          &::before{
            width: 100%;
            opacity: .5;
          }
        }
      }
      svg {
        position: relative;
        width:100%;
        height:100%;
        z-index: 2;
      }
      span {
        position: absolute;
        left: 50%;
        top: 50%;
        width: calc(100% - 12px);
        height: calc(100% - 12px);
        transform: translate(-50%,-50%) rotate(-45deg);
        z-index: 1;
        &::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 0;
          height: 100%;
          opacity: 0;
          transition: all .3s;
        }
        img {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%,-50%) rotate(45deg);
          width:14px;
        }
      }
  }
  .hmenu0 {
    display:inline-block;
  }
  .hmenu1 {
    display:none;
  }
  @media screen and (max-width:850px) {
    right: 20px;
    top: 15px;
    .hmenu0 {
      display:none
    }
    .hmenu1 {
      display:inline-block
    }
  }
`
export const Tooltip = styled(motion.div)`
  position: absolute;
  right: 0;
  top: 50px;
  background-color: ${props=>props.theme.colors.ACTIVE};
  padding: 12px 24px;
  border-radius: 50em;
  &::before {
    content: "";
    position: absolute;
    right: 8px;
    top: -30px;
    border: 20px solid ${props=>props.theme.colors.ACTIVE};
    border-right: 20px solid transparent;
    border-left: 5px solid transparent;
    border-top:22px solid transparent;
    transform: rotate(20deg);
  }
  a {
    color: ${props=>props.theme.colors.LIGHT};
  }
`
export const MoMenu = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${props=>props.theme.colors.DARK};
  z-index: 11;
`

export const aniHeadHoverBtn = {
  initial: {
    pathLength: 1,
  },
  whileHover: {
    pathLength: 0,
    transtion: {
      duration: 0.2,
    },
  },
};