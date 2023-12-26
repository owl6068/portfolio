import { motion } from "framer-motion";
import styled from "styled-components";
const primary='#ffae00';
const secondary='#f2f2f2';
const secondary2='#777';

const ls='20px';
const ms='16px';
const ss='12px';

export const TodoWrap = styled.div`
  @font-face {
      font-family: 'EASTARJET-Medium';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_231029@1.1/EASTARJET-Medium.woff2') format('woff2');
      font-weight: 500;
      font-style: normal;
  }
  *{
    font-family: 'EASTARJET-Medium';
  }
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 500px;
  height: 100vh;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0,0,0,.2);
  transform: scale(1);
  @media screen and (max-width:700px) {
    border-radius: 0;
  }
`
export const TodoContant = styled.div`
  flex-shrink: 0;
  padding: 30px 10px 100px;
  .todo {
    &__day {
      strong {
        font-size: ${ls};
      }
      span {
        display:block; 
        padding-top:8px; 
        font-size: ${ss}; 
        font-weight:900
      }
    }
    &__write {
      padding: 10px 20px;
      &__box {
        padding:10px 20px;
        margin: 20px 0;
        border: 1px solid ${primary};
        border-radius: 16px;
        > div {
          display: grid;
          align-items: flex-start;
          grid-template-columns: 90px auto;
          padding: 10px 0;
          > div {
            > p {
              color: #883aff;
              transform: translateY(calc(100% + 4px));
            }
          }
          label {
            padding-top:8px;
            font-size:${ms};
            font-weight:500;
            color: ${primary};
          }
          select { 
            padding:6px 10px;
            width:100%;
            height:36px;
            cursor: pointer;
            border:1px solid ${primary};
          }
          input { 
            padding:0 10px;
            width:100%;
            line-height:40px;
            border:1px solid ${primary};
          }
          textarea {
            padding:10px;
            width: 100%;
            height:100px;
            resize:none;
            border:1px solid ${primary};
          }
        }
        @media screen and (max-width:700px) {
          > div {
            grid-template-columns:1fr;
            padding: 0;
            label {
              padding-bottom:8px
            }
          }
        }
      }
    }
  }
  .btn {
    &__write {
        color:${secondary}; 
        font-weight: 900;
        border-radius: 8px; 
        background-color: ${primary};
      &.add {
        padding: 16px 0; 
        width: 150px;
      }
      &.save {
        padding: 10px 0; 
        width: 100%; 
        text-align:center; 
        margin: 10px 0;
      }
    }
  }
`

export const TodoWriteBox = styled(motion.div)`
  position: relative;
  height: 0;
  overflow: hidden;
`
export const TodoListType = styled(motion.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  z-index: 10;
  .scroll{
    position: relative;
    flex: 1;
    flex-direction: column; 
    padding: 20px 20px 40px;
    height: calc(100vh - 300px);
    background-color: ${secondary};
    z-index: 1;
  } 
`
export const TabBtnBox = styled.div`
  position: sticky;
  top: 0;
  height: 70px;
  font-size: ${ms};
  font-weight: bold;
  color: ${primary};
  transition: all .5s;
  > div {
      display: flex;
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      align-items: flex-end;
  }
`
export const TabBtn = styled.button`
  flex: 1;
  padding-bottom: 20px;
  line-height: 50px;
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  border-radius: 40px 10px 0 0;
  border-bottom: 0;
  background-color: ${secondary};
  transition: transform .5s;
  transform: translateY(20px);
  &.isActive {
    padding-bottom: 0;
    line-height: 70px;
    background-color: #FFC700;
    transform: translateY(0);
  }
  @media screen and (max-width:700px){
    padding-bottom: 20px;
    line-height: 50px;
    &.isActive {
      padding-bottom: 0;
      line-height: 60px;
    }
  }
`
export const ToDoLi = styled.li`
  padding: 30px 20px;
  margin: 0 0 20px;
  border: 2px solid ${primary};
  border-radius: 16px;
  box-shadow: 2px 2px 14px rgba(0,0,0,.2);
  &:last-child {
    margin-bottom:0
  }
  .todo {
    &__info {
      &__title{
        display:block;
        padding-bottom:14px;
        font-size:${ms};
        color:${secondary2};
        line-height:1.3;
        word-break: keep-all; 
      }
      &__detail{
        padding-top:20px;   
        font-size:${ms};
        line-height:1.4;
      }
      &__date{
        font-size:${ss};
        text-align:right;   
      }
    }
  }

`
export const BtnControlBox = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-around;
  gap: 8px;
` 
export const BtnControl = styled.button<{bgcolor?:string, color?:string}>`
  flex: 1; 
  margin:20px 0 0; 
  padding: 10px; 
  color: ${props => props.color ? props.color : '#333'}; transition: opacity .5s;
  border-radius: 8px; 
  background-color: ${props => props.bgcolor ? props.bgcolor : '#e9e9e9'};
  &:hover {
    opacity: 1;
  }
`