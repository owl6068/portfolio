import { motion } from "framer-motion";
import styled from "styled-components";
import { DFlex } from "../../css/common";

// =================  header css  =================

export const Head = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  width: 100%;
  z-index: 10;
`;
export const Col = styled(DFlex)`
  .logo {
    display: flex;
    padding: 15px;
    align-items: center;
  }
`;
export const Svg = styled(motion.svg)`
  fill: #bd0000;
  fill-opacity: 0;
  path {
    stroke: #fff;
    stroke-width: 1px;
  }
`;
export const Menu = styled(motion.div)`
  display: flex;
  align-items: center;
  align-content: space-around;
  margin: 0 20px;
  gap: 10px;
  a {
    position: relative;
    line-height: 60px;
    padding: 0 15px;
    color: ${(props) => props.theme.fontColor};
    font-weight: bold;
    text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white
  }
`;
export const MenuActive = styled(motion.span)`
  position: absolute;
  left: 50%;
  bottom: 10px;
  border-radius: 50em;
  width: 6px;
  height: 6px;
  background-color: red;
`;
export const SerchBox = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  overflow-x: hidden;
`;
export const SerChIpt = styled(motion.input)`
  padding: 0 10px;
  width: 200px;
  line-height: 32px;
  transform-origin: right center;
`;
export const SerChBtn = styled(DFlex)`
  padding: 0 15px;
  height: 32px;
  background-color: transparent;
`;

export const aniHeaderFix = {
  fixed: {
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
  scroll: {
    backgroundColor: "rgba(0, 0, 0, 1)",
  },
};
export const aniLogo = {
  initial: {
    fillOpacity: 1,
  },
  animate: {
    fillOpacity: [0, 0.5, 0, 0.7, 0.1],
    transition: { repeat: Infinity },
  },
};
export const aniSerchBox = {
  hide: { border: "0", width: 50 },
  show: { border: `1px solid #ddd`, width: "auto" },
};
export const aniSerchIpt = {
  hide: { scaleX: 0, transition: { delay: 0.3 } },
  show: { scaleX: 1, transition: { duration: 0.1 } },
};

// =================  page css  =================

export const Conratiner = styled.div`
  min-width: 1400px;
  min-height:100vh; 
  background-color:#000;
  /* overflow:hidden;  */
`;
export const BannerSection = styled.section<{bgimg:string}>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 85vh;
  background-color: green;
  background: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1)), url(${props=>props.bgimg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
export const BannerInfoBox = styled(motion.div)`
  padding: 35px;
  max-width: 700px;
  * {
    color:#f1f1f1;
  }
  .banner {
    &__title {
      font-size:80px;
    }
    &__desc {
      padding-top:30px;
      font-size:18px;
      line-height: 1.3;
    }
  }
`;
export const ItemSection = styled.section`
  position: relative;
  padding: 0 35px 150px 35px;
  .section__title {
    padding:10px 0 30px;
    font-size:30px;
    color:#f1f1f1; 
    line-height:30px; 
  }
`;
export const SliderContant = styled.div`
  position: relative;
  height: 201px;
  .btn {
    &__slide {
      position: absolute; 
      top: 0;
      width: 80px;
      height: 100%;
      font-size: 30px;
      color: #f1f1f1;
      background-color: rgba(0,0,0,.8);
      &.prev {
        transform: translateX(calc(-50% - 10px))
      }
      &.next {
        right: 0;
        transform: translateX(calc(50% - 6px))
      }
    }
  }
`;
export const SliderBox = styled(motion.div)`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  width:100%;
  height: 200px;
  gap: 10px;
`;
export const SliderItem = styled(motion.div)`
  flex: 1;
  position: relative;
  height: 100%;
  cursor: pointer;
  &:nth-child(1) > div {
    transform-origin:center left;
  }
  &:nth-child(6) > div {
    transform-origin:center right;
  }
  &.hide {
    background: url('');
  }
  .noimg {
    position: relative;
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
    height:100%;
    text-align: center;
    background-color:#ccc;
    &:after{  
      content: "No Image";
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
      font-size: 50px;
      color: #ddd;
      font-weight: bold;
      z-index: 1;
    }
    span{
      position: relative;
      z-index: 2;
    }
  }
  &:hover{
    .slider__img{
      border-radius: 10px 10px 0 0;
    }
    .slider__info{
      display: block;
    }
  }
`;
export const SliderImg = styled.div`
  position: relative;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
  overflow: hidden;
  img {
    width:100%;
  }
  h4 {
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    position: absolute;
    left: 0;
    bottom: 0;
    padding: 20px;
    width:100%;
    height:100%;
    font-size: 20px;
    color: #f1f1f1;
    background: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1));
  }
`;
export const SliderInfo = styled.div`
  display: none;
  padding: 20px;
  width: 100%;
  border-radius: 0 0 10px 10px;
  background-color: #333;
  * {
    color: #f1f1f1;
  }

  div {
    font-size: 16px;
    & + div {
      padding-top: 20px;
    }
    span {
      display: block;
      font-size: 12px;
    }
    .btnBox {
      gap: 4px;
      button {
        width: 30px;
        height: 30px;
        line-height: 28px;
        border: 1px solid #f1f1f1;
        border-radius: 50em;
        background-color: transparent;
        transition: all .3s;
        &:hover {
          border-color: red;
        }
      }
    }
    .view {
      color: green;
    }
    .point {
      padding: 3px;
      margin: 0 8px;
      width: 20px;
      height: 20px;
      font-size: 14px;
      line-height: 12px;
      text-align: center;
      border-radius: 4px;
      background-color: orange;
    }
    .hd {
      padding: 0 3px;
      margin: 0 8px;
      font-size: 10px;
      line-height: 1;
      border: 1px solid #f1f1f1;
    }
  }
`;

export const ModalWrap = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  padding: 100px 1px;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.7);
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  z-index: 10;
  &::-webkit-scrollbar {
      display: none; 
  }
  `
export const ModalDim = styled(motion.div)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  `
export const ModalContant = styled(motion.div)`
  padding:20px;
  width: 100%;
  max-width: 1000px;
  min-height: 100vh;
  z-index: 2;
  .modal__inner {
    padding: 35px;
    width: 100%;
    min-height: 100vh;
    background-color: #111;
    .noimg {
      display:flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      position: relative;
      padding: 20px;
      height:350px;
      text-align: center;
      background-color:#ccc;
      &:after {  
        content: "No Image";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        font-size: 50px;
        color: #ddd;
        font-weight: bold;
        z-index: 1;
      }
      span {
        position: relative;
        z-index: 2;
      }
    }
    .modal {
      &__img-box {
        position: relative;
        overflow:hidden;
       &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1));
        z-index: 1;
       }
      }
      &__title {
        margin-top:-50px; 
        font-size:50px;
      }
      &__info-box {
        position: relative;
        z-index: 2;
        * {
          color:#f1f1f1;
        }
        ul {
          padding-top: 20px;
          li {
            padding: 14px 0;
            span {
              font-size:14px; 
              color:#999;
            }
            p {
              padding-top:10px; 
              font-size:20px;
            }
            &.genres {
              p + p {
                &::before {
                  content: '/';
                  padding: 0 5px 0 10px;
                }
              }
            }
          }
        }
      }
    }
  }
`