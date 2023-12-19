import { IHeaderNav, IMyInfoTag, IMySkill, IPortFolioInfoAtom} from "../interface/PFinterface";
import { ImgUrlEtcArr, ImgUrlSkilArr, ImgUrlStieArr } from "./ImgUrl";
const BASICURL = `${process.env.PUBLIC_URL}`;
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
    img:ImgUrlEtcArr.phone.url,
  },
  {
    id:'rb2',
    name:'메뉴',
    img:ImgUrlEtcArr.bar.url,
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
    img:ImgUrlSkilArr.html.url,
    adept:95,
  },
  {
    name:'css',
    img:ImgUrlSkilArr.css.url,
    adept:95,
  },
  {
    name:'javascript',
    img:ImgUrlSkilArr.js.url,
    adept:70,
  },
  {
    name:'jQuery',
    img:ImgUrlSkilArr.jquery.url,
    adept:60,
  },
  {
    name:'react',
    img:ImgUrlSkilArr.react.url,
    adept:40,
  },
  {
    name:'vue',
    img:ImgUrlSkilArr.vue.url,
    adept:40,
  },
  {
    name:'typescript',
    img:ImgUrlSkilArr.ts.url,
    adept:30,
  },
  {
    name:'styled-component',
    img:ImgUrlSkilArr.styled.url,
    adept:60,
  },
  {
    name:'vuetify',
    img:ImgUrlSkilArr.vuetify.url,
    adept:60,
  },
  {
    name:'bootstrap',
    img:ImgUrlSkilArr.boot.url,
    adept:70,
  },
  {
    name:'sass',
    img:ImgUrlSkilArr.sass.url,
    adept:70,
  },
  {
    name:'realGrid',
    img:ImgUrlSkilArr.grid.url,
    adept:20,
  },
]
// ======== portfolio ========
export const PortFolioBtn : IMyInfoTag[] = [
  {
    id:'tt1',
    name:'All'
  },
  {
    id:'tt2',
    name:'Career'
  },
  {
    id:'tt3',
    name:'React'
  },
  {
    id:'tt4',
    name:'Vue'
  },
]
export const PortFolioList:IPortFolioInfoAtom = {
  react:[
    {
      id:'re1',
      career:false,
      bgImg:ImgUrlStieArr.msPF.url,
      lib:'React',
      title:'PortFolio',
      simply:'react로 작업한 포트폴리오',
      desc:'createBrowserRouter를 사용하였으며, "recoil(상태관리)"로 data를 전역(atom)에서 사용할수 있도록 등록하고, selector에서 가공하여 바인딩을 하는 형식으로 작업하였습니다.\n"typeScript(interface)"를 등록하여, 형을 정의하고 매개변수값을 이용하여 error생기는 부분을 빠르게 찾아 수정할수 있었습니다.\n"styled-component"를 이용하여 상황별 style이 변경되도록 변수전달방식이 편하고,\n똑같은 태그 보다 지정이름으로 한눈에 보기 편한 방식때문에 사용하였다.\n그리고 다양한 animation를 구현 할수 있는 "framer motion"을 이용하여 자연스루업 디자인을 추가할수 있었습니다.',
      date:'2023. 12',
      css:'styled-component',
      skill:'react / useRecoli / framer-motion / typeScript(interface) / useState / useEffect',
    },
    {
      id:'re2',
      career:false,
      bgImg:ImgUrlStieArr.msPF.url,
      lib:'React',
      title:'Coins',
      simply:'coinpaprika APi정보로 만든 정보페이지',
      desc:'coin api를 가지고 정보표출과 차트연결 구현',
      link:`${BASICURL}/coins`,
      date:'2023. 12',
      css:'styled-component',
      skill:'react / useRecoli / framer-motion / typeScript(interface) / apexcharts / useState / useEffect',
      api:'https://www.coingecko.com/api/documentation',
    },
    {
      id:'re3',
      career:false,
      bgImg:ImgUrlStieArr.msPF.url,
      lib:'React',
      title:'Form',
      simply:'유의사항, 회원가입폼 작업',
      desc:'Form localstorage get,set 방식으로 저장',
      link:`${BASICURL}/joinstep1`,
      date:'2023. 12',
      css:'styled-component',
      skill:'',
    },
    {
      id:'re4',
      career:false,
      bgImg:ImgUrlStieArr.msPF.url,
      lib:'React',
      title:'ToDo List',
      simply:'todo List',
      desc:'todo List recoil-persist자용하여 localhost 저장',
      link:`${BASICURL}/joinstep1`,
      date:'2023. 12',
      css:'styled-component',
      skill:'',
    },
  ],
  career:[
    {
      id:'ca1',
      bgImg:ImgUrlStieArr.skt.url,
      lib:'Vue',
      career:true,
      title:'SK 우주T',
      simply:'SK 우주T admin의 Swing메뉴',
      desc:'우주T admin 리뉴얼건에 "Swing"새로운 메뉴 작업으로 퍼블리싱 프리랜서 단기로 입사를 하였습니다.\nvue, vuetify를 사용하며 기존에 만들어놓은 모듈을 사용하거나, 없으면 vuetify로 ui를 만들어 페이지를 작업하였습니다.\nadmin 페이지라 다양한 디자인의 table이 많았는데, "RealGrid"로 많은 custom를 보며 많은 도움이 되었습니다.',
      display:'적응형(PC)',
      date:'2023.08 ~ 2023.09',
      skill:'vue / vuefify / realgrid / git / scss / html',
      tool:
        {
          design:'Figma',
          schedule:'Jira',
          collabo:'confluence',
        }
    },
    {
      id:'ca2',
      bgImg:ImgUrlStieArr.allraai.url,
      lib:'allra',
      career:true,
      title:'allra Ai장부',
      simply:'쇼핑몰 선정산 서비스와 연동된 장부',
      desc:'판매현황, 정산받을수 있는 금액들을 장부를 통해 확인이 가능하며 전체 분포해 있는 쇼핑몰들의 금액을 한번에 확인할수 있는 장부사이트로 전페이지 javascript로 웹퍼블리싱 작업하였습니다.',
      display:'적응형(PC)',
      date:'2023.04 ~ 2023.05',
      skill:'javascript / scss / html',
      tool:
       {
          design:'Figma',
          schedule:'flow',
          collabo:'flow',
       },
       link:'https://ai.allra.co.kr/'
    },
    {
      id:'ca3',
      bgImg:ImgUrlStieArr.allra.url,
      lib:'Vue',
      career:true,
      title:'allra',
      simply:'쇼핑몰 선정산 핀테크 서비스',
      desc:'Vue로 제작된 사이트이며, 간단한 바인딩, ui유지보수, 새로페이지 작업을 하였습니다.',
      display:'반응형',
      date:'2022.10 ~ 2023.05',
      skill:'vue / scss / gitlab / html',
      tool:
       {
          design:'Figma',
          schedule:'Flow',
          collabo:'Flow',
       },
       link:'https://www.allra.co.kr/'
    },
    {
      id:'ca4',
      bgImg:ImgUrlStieArr.kace.url,
      lib:'kacelab',
      career:true,
      title:'Kacelab',
      simply:'스타트업 에이전시',
      desc:'Vue로 제작된 사이트이며, 주로 페이지 리뉴얼 되는 부분을 vue로 작업된 파일에서 scss로 직접 수정 및 추가 작업하였습니다.',
      date:'2022.01 ~ 2022.06',
      skill:'javascript / jQuery / scss / css / html',
      tool:
       {
          design:'Figma , Zeplin',
          schedule:'Jira',
          collabo:'Slack',
       },
       site:[
        {
          name:'듀오백',
          display:'반응형웹',
          desc:'유지보수 및 as상품문의 페이지 작업하였습니다.',
          link:'http://duoduoback.firstmall.kr/duoback'
        },
        {
          name:'코오롱',
          display:'적응형 pc',
          desc:'차랑렌트 admin ERP 시스템 퍼블리싱 작업하였습니다.',
        },
        {
          name:'버스콜',
          display:'웹앱',
          desc:'버스차량 예약서비스 전페이지 퍼블리싱 작업하여, flutter로 개발되었습니다.',
          link:'https://bus-call.kr/'
        },
        {
          name:'실드',
          display:'네이티브앱',
          desc:'쇼핑몰 앱으로 리액트 작업전에 전페이지 퍼블리싱 요청으로 전페이지 작업하였습니다.',
          link:'https://www.kacelab.com/work_view.php?idx=25'
        },
        {
          name:'teenstudio',
          display:'웹앱',
          desc:'10대들의 의사소통 사이트이며, 쇼핑, 검색, 게시글 부분작업하였습니다.',
          link:'https://teenstudio.app/teen_post'
        },
        {
          name:'고고고타이골프',
          display:'반응형웹',
          desc:'태국에서의 골프코스 및 숙박, 차량을 예약하는 서비스 퍼블리싱 작업 하였습니다.',
          link:'https://www.kacelab.com/work_view.php?idx=24'
        },
       ],
       link:'https://www.kacelab.com/intro.php'
    },
    {
      id:'ca5',
      bgImg:ImgUrlStieArr.dbdb.url,
      lib:'dbdb',
      career:true,
      title:'디비디비',
      simply:'오픈마켓 쇼핑몰 사이트',
      desc:'계약직으로 입사하여 사이트 전 페이지 리뉴얼 및 선물하기, 스토어탐색, 추천상품 영역 새로구축하였습니다.',
      display:'반응형 웹',
      date:'2020.11 ~ 2021.10',
      skill:'jQuery / scss / css / html',
      tool:
       {
          design:'Photoshop',
          schedule:'Jira',
          collabo:'Slack',
       },
       link:'https://www.dibidibi.com/'
    },
    {
      id:'ca6',
      bgImg:ImgUrlStieArr.hak.url,
      lib:'hdm',
      career:true,
      title:'학생독립만세',
      simply:'소득공유(ISA) 후불제',
      desc:'인턴3개월로 근무하며 처음으로 페이지를 만들었습니다.\n청년금융쪽의 페이지를 작업하였고, 자동결제 시스템 페이지 작업하고, 소득공유에 대한 소개페이지, 유지보수등등 여러가지를 시도해본 회사입니다.',
      display:'반응형 웹',
      date:'2020.08 ~ 2020.10',
      skill:'jQuery / css / html',
      tool:
       {
          design:'Zeplin',
          schedule:'Jira',
          collabo:'Slack',
       },
       link:'https://www.dibidibi.com/'
    },
  ],
  
  vue:[

  ]
}
