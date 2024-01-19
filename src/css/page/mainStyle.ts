import styled from "styled-components";
import { motion } from "framer-motion";
import { Inner, Section } from "../common";

export const MainSection = styled(Section)`
  padding: 0;
  padding-top: 80px;
  @media screen and (max-width: ${props=>props.theme.width.width_s}){
    padding-top: 70px;
  }
`
export const MainInner = styled(Inner)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center; 
  overflow: hidden;
`
export const NameBox = styled.div`
  padding-bottom: 80px;
  @media screen and (max-width: ${props=>props.theme.width.width_s}){
    padding-bottom: 70px;
  }
`
export const Name = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  border: 5px solid #111;
  padding: 25px;
  width: 304px;
  height: 304px;
  transition: width .3s;
  @media screen and (max-width:850px){
    width: 250px;
    height: 250px;
    padding:16px
  }
  @media screen and (max-width:450px){
    width: 200px;
    height: 200px;
  }
`
export const NameText = styled(motion.span)`
  text-align: center;
  font-family: 'Archivo Black', sans-serif;
  font-size: 120px;
  color: ${props=>props.theme.colors.PRIMARY};
  transition: font .3s;
  @media screen and (max-width:850px){
    font-size: 100px;
  }
  @media screen and (max-width:450px){
    font-size: 80px;
  }
`
export const NameDesc = styled(motion.h1)`
  padding: 16px 0;
  text-align: justify;
  font-size: 40px;
  font-family: 'Archivo Black', sans-serif;
  white-space: nowrap;
  transition: font .3s;
  @media screen and (max-width:850px){
    font-size:33px
  }
  @media screen and (max-width:450px){
    font-size:26px
  }
`
export const Triangle = styled(motion.div)`
  position: absolute;
  left: 50%;
  bottom: calc(20vh - 200px);
  width: 280px;
  height: 280px;
  background: #FFC700;
  z-index: 1;
`

// =========== motion ============
export const aniName = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.6,
      delay: 0.2,
      duration: 1,
      delayChildren: 2.2,
      staggerChildren: 0.3,
    },
  },
};
export const aniM = {
  hidden: { opacity: 0, x: -100, rotate: 180 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      delay: 1.2,
      duration: 1,
    },
  },
};
export const aniText = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
export const aniUpDwon = {
  hidden: { y: -40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      delay: 3.2,
      duration: 1,
    },
  },
};
export const aniDwonUp = {
  hidden: { x: '-50%', y: '100%', opacity: 0, rotate: 45},
  visible: {
    x: '-50%',
    y: '50%',
    opacity: 1,
    rotate:45,
    transition: {
      type: "tween",
      delay: 3.2,
      duration: 1,
    },
  },
};