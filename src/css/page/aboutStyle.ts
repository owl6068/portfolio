import styled from "styled-components";
import { motion } from "framer-motion";
import { DFlex, Inner, Section } from "../common";


export const AboutSection = styled(Section)`
  padding: 80px 0;
`
export const AboutInner = styled(Inner)`
  position: relative;
  max-width: ${props=>props.theme.width.width_l};
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-self: stretch;
    gap: 80px;
    width: 100%;
    transition: all .3s;
    @media screen and (max-width: ${props=>props.theme.width.width_l}) {
      gap: calc(10vw - 20px);
    }
    @media screen and (max-width: ${props=>props.theme.width.width_m}) {
      flex-direction: column;
      gap: 0;
    }
  }
`

export const MyInfo = styled(motion.div)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 300px;
  max-width: 400px;
  height: 100%;
  transform-origin: right bottom ;
  transition: width .3s;
  > div{
    height: 100%;
    padding: 20px;
    border: 4px solid #111;
  }
  @media screen and (max-width: ${props=>props.theme.width.width_m}) {
    margin-top: 40px;
    max-width: 540px;
  }
`
export const TitleBox = styled(DFlex)`
  justify-content: center;
  width: 100%;
  height: 120px;
  padding:20px 40px ;
  border-bottom: 1px solid ${props=>props.theme.colors.DARK};
  text-align: center;
  transition: all 0.3s;
  > *:not(img){
    padding: 0 20px;
  }
  @media screen and (max-width: ${props=>props.theme.width.width_m}) {
    height: auto;
    padding: 0 0 20px;
  }
`
export const TagBox = styled.div`
  margin: 16px 0;
  text-align: center;
  transition: all .3s;
`
export const Tag = styled.span`
  display: inline-block;
  padding: 4px 6px;
  margin: 4px;
  border-radius: 4px;
  font-size: ${props=>props.theme.font.size_ms};
  font-weight: 900;
  border: 1px solid ${props=>props.theme.colors.DARK};
  @media screen and (max-width: ${props=>props.theme.width.width_m}) {
    font-size: ${props=>props.theme.font.size_s};
  }
`
export const MyOneWord = styled.p`
  padding: 20px 0;
  line-height: 1.4;
  word-break: keep-all;
`
export const MyAnotherInfo = styled.ul`
  text-align: center;
  padding: 20px 0;
  border-top: 1px solid ${props=>props.theme.colors.DARK};
  li {
    margin: 2px 0;
    padding: 2px 0;
  }
  a,address {
    display: block;
    line-height: 1.3;
    font-weight: 900;
    font-size: ${props=>props.theme.font.size_ms};
  }
`
export const MsImg = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  z-index: -1;
  transition: opacity .5s;
  width: 20%;
  @media screen and (max-width: ${props=>props.theme.width.width_l}) {
    opacity: .1;
  }
`
export const MsImgMo = styled(motion.div)`
  position: absolute;
  top:0;
  opacity: .1;
  z-index: -1;
  width: 200px;
`
export const MsImgFix = styled(motion.div)`
  position: absolute;
  right: 50px;
  bottom: 50px;
  width: 50px;
  z-index: 1;
`
export const MySkill = styled(motion.div)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 300px;
  max-width: 400px;
  height: 100%;
  transform-origin: left bottom ;
  > div{
    height: 100%;
    padding: 20px;
    border: 4px solid #111;
  }
  @media screen and (max-width: ${props=>props.theme.width.width_m}) {
    margin-top: 40px;
    max-width: 540px;
  }
`
export const SkillInfoBox = styled(DFlex)`
  position: relative;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 16px;
  padding: 20px 0;
  img{height:60px}
  @media screen and  (max-width: ${props=>props.theme.width.width_m}){
    img{height:40px}
  }
`
export const SkillStep = styled.div<{width:number}>`
  position: relative;
  margin: 20px 0;
  width: 100%;
  height: 10px;
  border-radius: 50em;
  background-color: #eee;
  border: 2px solid #111;
  overflow: hidden;
  width: 80px;
  &::before{
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: ${props=>props.width+'%'};
    height: 100%;
    background:${props=>props.theme.colors.PRIMARY};
    z-index: 1;
  }
  &::after{
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, 
      transparent 18%, #111 18%, #111 20%, 
      transparent 20%, transparent 38%, #111 38%, #111 40%, 
      transparent 40%, transparent 58%, #111 58%, #111 60%, 
      transparent 60%, transparent 78%, #111 78%, #111 80%, 
      transparent 80% 
    );
    z-index: 2;
  }
  @media screen and  (max-width: ${props=>props.theme.width.width_m}){
    margin: 10px 0;
    width: 64px;
  }
`

// =========== motion ============
export const cardVariants = {
  offscreen: {
    y: "-150%",
    opacity: 1,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1,
    },
  },
  exit:{
    opacity: 0,
    transition:{
      duration:.5
    }
  }
};
export const leftBox = {
  offscreen: {
    opacity: 0,
    x: 200,
  },
  onscreen: (custom:number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: custom,
      duration: 0.5,
    },
  })
};
export const rightBox = {
  offscreen: {
    opacity: 0,
    x: -200,
  },

  onscreen: (custom:number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: custom,
      duration: 0.5,
    },
  })
};