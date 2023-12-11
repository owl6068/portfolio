// my-theme.ts
import { DefaultTheme } from 'styled-components';

const myTheme: DefaultTheme = {
  colors: {
    PRIMARY: '#FFC700',
    SECONDARY: '#777',
    ACTIVE: '#ff6c00',
    REACT: '#61DAFB',
    VUE: '#42B983',
    LIGHT: '#F9F9F9',
    DARK: '#222',
  },
  font:{
    size_l:'24px',
    size_m:'20px',
    size_ms:'16px',
    size_s:'14px',
    size_ss:'12px',
  },
  width:{
    width_lx:'1920px',
    width_l:'1240px',
    width_m:'1000px',
    width_s:'850px',
    width_ss:'500px',
  },
  boxShadow:'0 2px 10px rgba(0,0,0,0.2)'
};


export { myTheme };