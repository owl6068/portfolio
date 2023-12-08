import { IHeaderNav, IMyInfoTag, IMySkill, IPortFolioNav } from "./interface";

// ======== header ========
export const headerNav : IHeaderNav[] = [
  {
    id:'m1',
    name:'Main',
  },
  {
    id:'m2',
    name:'About',
  },
  {
    id:'m3',
    name:'PortFolio',
  }
];

export const headerBtn : IHeaderNav[]= [
  {
    id:'rb1',
    name:'연락처',
    img:'/img/phone.svg',
  },
  {
    id:'rb2',
    name:'메뉴',
    img:'/img/bar.svg',
  }
];

// ======== about ========
export const myInfoTag : IMyInfoTag[] = [
  {
    id:'tag1',
    name:'의사소통 굿',
  },
  {
    id:'tag2',
    name:'집중력 굿',
  },
  {
    id:'tag3',
    name:'배려 녀',
  },
  {
    id:'tag4',
    name:'혼나도 괜찮아요 배우면서 일해요!',
  },
  {
    id:'tag5',
    name:'현실주의자',
  },
  {
    id:'tag6',
    name:'스트레스틑 먹을꺼로',
  },
  {
    id:'tag7',
    name:'둥글둥글 인상',
  },
  {
    id:'ta',
    name:'둥글둥글 성격',
  },

];
export const mySkill : IMySkill[]= [
  {
    name:'html',
    img:'/img/logo/html.svg',
    adept:95,
  },
  {
    name:'css',
    img:'/img/logo/css.svg',
    adept:95,
  },
  {
    name:'javascript',
    img:'/img/logo/js.svg',
    adept:70,
  },
  {
    name:'jQuery',
    img:'/img/logo/jquery.svg',
    adept:60,
  },
  {
    name:'react',
    img:'/img/logo/react.svg',
    adept:40,
  },
  {
    name:'vue',
    img:'/img/logo/vue.svg',
    adept:40,
  },
  {
    name:'typescript',
    img:'/img/logo/ts.svg',
    adept:40,
  },
  {
    name:'styled-component',
    img:'/img/logo/styled.svg',
    adept:60,
  },
  {
    name:'vuetify',
    img:'/img/logo/vuetify.svg',
    adept:60,
  },
  {
    name:'bootstrap',
    img:'/img/logo/boot.svg',
    adept:70,
  },
  {
    name:'sass',
    img:'/img/logo/sass.svg',
    adept:70,
  },
]
// ======== portfolio ========
export const PortFolioNav : IPortFolioNav[] = [
  {
    id:'coin',
    title:'Coin List',
    simply:'코인api를 가지고와서 보여주는 간단 모듈',
    desc:'코인API를 가지고와 정보 표출,코인API를 가지고와 정보 표출',
    date:'2023.11 ~ 2023.12',
    order:'react',
    css:'styled-component',
    hook:'react-hook-form( register, handleSubmit, formstate, setError ),useForm,useForm,useForm,useForm',
    api:'paprica.api',
    link:'aaa'
  },
  {
    id:'coin',
    title:'Coin List',
    simply:'코인api를 가지고와서 보여주는 간단 모듈',
    desc:'코인API를 가지고와 정보 표출,코인API를 가지고와 정보 표출',
    date:'2023.11 ~ 2023.12',
    order:'react',
    css:'styled-component',
    hook:'react-hook-form( register, handleSubmit, formstate, setError ),useForm,useForm,useForm,useForm',
    api:'paprica.api',
    link:'aaa'
  },
]