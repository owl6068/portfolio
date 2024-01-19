import styled from "styled-components";
import { Inner, Section } from "../common";
import { motion } from "framer-motion";

export const PortFolioSection = styled(Section)`
  padding: 80px 0;
`
export const PortFolioInner = styled(Inner)<{text:string}>`
  position: relative;
  padding-top: 50px;
  padding-bottom: 50px;
  margin: 0 auto;
  max-width: ${props=>props.theme.width.width_l};
`
export const BgTextbox = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: absolute;
  top: 0%;
  left: 0%;
  padding: 160px 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all 0.3s;
    @media screen and (max-width: ${props=>props.theme.width.width_m}){
      align-items: flex-start;
      justify-content: flex-start;
      writing-mode: vertical-rl;
    }
    @media screen and (max-width: ${props=>props.theme.width.width_s}){
      align-items: center;
    }
    @media screen and (max-width: ${props=>props.theme.width.width_ss}){
      padding: 160px 0;
      h2{font-size:60vw}
    }
`
export const BgText = styled(motion.h2)<{color:string}>`
  font-size: calc(40vw - 50px);
  opacity: .1;
  color: ${props=> props.color === 'Career' ? props.theme.colors.ACTIVE : props.color === 'React' ? props.theme.colors.REACT : props.color === 'Vue' ? props.theme.colors.VUE : props.theme.colors.DARK};
  font-family: 'Archivo Black';
`

// ============== motion ==============
export const aniBgText = {
  offscreen:{
    opacity:0,
    scale:0
  },
  onscreen:{
    opacity:.1,
    scale:1,
    transition : {
      duration:.3
    }
  }
}

export const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

export const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};