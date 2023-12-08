import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      PRIMARY:string;
      SECONDARY:string;
      ACTIVE:string;
      REACT:string;
      VUE:string;
      LIGHT:string;
      DARK:string;
    };
    title:{
      size_l:string;
      size_m:string;
      size_s:string;
    }
    font:{
      size_l:string;
      size_m:string;
      size_ms:string;
      size_s:string;
      size_ss:string;
    }
  }
}