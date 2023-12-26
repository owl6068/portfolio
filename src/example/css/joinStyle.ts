import styled from "styled-components";
import { motion } from "framer-motion";

// 유의사항

export const CheckWrap = styled.div`
  padding: 40px 0;
  height: 100%;
  overflow: auto;
  input{
    transform-origin: left center;
    transform: scale(1.5);
  }
  label{
    display: block;
    padding-left: 20px;
  }
`
export const CheckAllBox = styled(motion.li)`
  display: flex;
  align-items: center;
  padding: 30px 0;
  border-bottom: 2px solid #ddd;
`
export const CheckChkLi = styled(motion.li)`
  display: flex;
  align-items: center;
  padding: 20px 0 0;
  
`
export const BtnNextBox = styled.div`
  position: fixed;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 20px;
  width: 100%;
  max-width: 500px;
  text-align: center;
  background-color: #fff;
`

// 가입폼

export const DFlexFixAuto = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: 40px;
  .box{
    &__fixed{
      flex-shrink: 0;
    }
    &__auto{
      width: 100%;
    }
  }
  @media screen and (max-width: 700px) {
    flex-direction:column;
    gap:0px;
    .box__fixed{
      align-self:center;
    }
  }
`
export const ProfilBox = styled.div`
  overflow: hidden;
  position: relative;
  .img__view{
    display: block;
    width: 200px;
    height: 170px;
    margin-bottom: 50px;
    border: 1px solid #ddd;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    cursor: pointer;
    &-text{
      position: absolute;
      left: 0;
      bottom: 20px;
      width: 100%;
      border: 1px solid #ddd;
      text-align: center;
      line-height: 30px;
      background-color: #fff;
    }
  }
`;
export const InputBox = styled.div`
  position: relative;
  padding: 16px 0;
  .input{
    &:is([type='text'],[type='number'],[type='tel'],[type='password'],[type='email']){
      width: 100%;
      padding: 0 10px;
      line-height: 40px;
      border: 1px solid #ccc;
      background-color: #fff;
      outline: none;

      &:focus{
        border: 1px solid #3bc8ed;
        border-radius: 4px;
      }
      &::placeholder{
        color: #aaa;
        font-size: 12px;
        font-weight: bold;
      }
      &::-moz-placeholder{
        color: #aaa;
        font-size: 12px;
        font-weight: bold;
      }
      &::-webkit-input-placeholder{
        color: #aaa;
        font-size: 12px;
        font-weight: bold;
      }
    }
    &:is([type='checkbox'],[type='radio']){
      margin: 3px;
    }
    &__title{
      display: block;
      color: ${props=>props.theme.colors.SECONDARY};
      font-size: 14px;
      padding-bottom: 8px;
    }
  }
`
export const Label = styled.label`
  display: block;
  padding: 8px 0;
  color: ${props=>props.theme.colors.SECONDARY};
  font-size: 14px;
  font-weight: bold;
  word-break: keep-all;
`;
export const PasswordInput = styled.div`
  position: relative;
  input{
    padding-right: 80px;
  }
  button{
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    background-color: transparent;
    font-size: 14px;
    color: #777;
  }
`

export const InputChk = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 10px 0;
  gap: 10px;
    input {
      transform: scale(1.5);
      margin: 6px 6px 6px;
    }
    label{
      font-size: 18px;
      word-break: keep-all;
      line-height: 1.3;
    }
`;
export const InputChk2 = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  gap: 10px;
    input {
      transform: scale(1.4);
      margin: 3px;
    }
    label{
      word-break: keep-all;
      line-height: 1.3;
    }
`
export const ErrorText = styled.p`
  position: absolute;
  left: 0;
  bottom: 0;
  font-size: 12px;
  color: red;
  font-weight: 300;
`;

export const Btn = styled.button<{disabled?:boolean}>`
  display: block;
  width: 100%;
  line-height: 50px;
  font-size: 20px;
  transition: all .3s;
  cursor: pointer;
  overflow: hidden;
  opacity: ${props => props.disabled ? .6 : 1};
  background: ${props=>props.theme.colors.PRIMARY};
    &:disabled{
    color: #fff;
    background-color: ${props=>props.theme.colors.SECONDARY};
    opacity: .5;
    }
    &:hover {
      opacity: 1;
    }
`;

export const LinkBtn = styled(Btn)<{disabled:boolean}>`
  text-align: center;
  a{
    display:block;
    width: 100%;
  }
`;

// comfirm
export const FormListUl = styled(motion.ul)`
  display: flex;
  flex-wrap: wrap;
`
export const FormListLi = styled(motion.li)`
  width: 50%;
  padding: 16px 0;
  &.w100{
    width: 100%;
  }
  .img__view{width:100%; height:200px; background-size:auto 100%}
  span{
    display: block;
    &:first-child{font-size:12px}
    &:last-child{display:block;}
  }
`

// ============== motion ==============
export const container = {
  hidden: { opacity: 1  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

export const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};