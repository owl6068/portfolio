// my-theme.ts
import { DefaultTheme } from 'styled-components';


const myTheme: DefaultTheme = {
  colors: {
    PRIMARY: '#FFC700',
    SECONDARY: '#DDD',
    ACTIVE: '#E5423D',
    REACT: '#61DAFB',
    VUE: '#42B983',
    LIGHT: '#F9F9F9',
    DARK: '#222',
  },
  title:{
    size_l:'50px',
    size_m:'40px',
    size_s:'30px',
  },
  font:{
    size_l:'24px',
    size_m:'20px',
    size_ms:'16px',
    size_s:'14px',
    size_ss:'12px',
  }
};


export { myTheme };