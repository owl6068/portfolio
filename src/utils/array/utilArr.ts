import { IHeaderNav, IMyInfoTag, IMySkill, IPortFolioInfoAtom} from "../interface/PFinterface";
import { ImgUrlEtcArr, ImgUrlSkilArr, ImgUrlStieArr } from "./ImgUrl";
export const BASICURL = `${process.env.PUBLIC_URL}`;
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
    name:'기한 엄수',
  },
  {
    id:'tag5',
    name:'현실주의자',
  },
  {
    id:'tag6',
    name:'이미 스며들었어요',
  },
  {
    id:'tag7',
    name:'우선해보자!',
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
    adept:80,
  },
  {
    name:'jQuery',
    img:ImgUrlSkilArr.jquery.url,
    adept:80,
  },
  {
    name:'react',
    img:ImgUrlSkilArr.react.url,
    adept:70,
  },
  {
    name:'vue',
    img:ImgUrlSkilArr.vue.url,
    adept:50,
  },
  {
    name:'typescript',
    img:ImgUrlSkilArr.ts.url,
    adept:60,
  },
  {
    name:'styled-component',
    img:ImgUrlSkilArr.styled.url,
    adept:70,
  },
  {
    name:'vuetify',
    img:ImgUrlSkilArr.vuetify.url,
    adept:80,
  },
  {
    name:'bootstrap',
    img:ImgUrlSkilArr.boot.url,
    adept:90,
  },
  {
    name:'sass',
    img:ImgUrlSkilArr.sass.url,
    adept:80,
  },
  {
    name:'realGrid',
    img:ImgUrlSkilArr.grid.url,
    adept:40,
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
      simply:'react로 작업한 포트폴리오 (v6)',
      desc:[
        {
          title:'프로젝트 작업 시 문제 해결과 결과',
          text:[
            '직접 만든 객체구조를 이용하여 데이터 바인딩 형식으로 문구와, 이미지를 불러와 사이트를 제작하였습니다',
            '디자인 초기에는 반복적인 수정 과정을 거치며 Framer Motion으로 애니메이션을 구현하는 데 어려움을 겪었습니다. SPA 방식으로 작업하면서 발생한 다양한 오류를 해결하기 위해 끊임없이 실험하고 찾아보며 문제를 해결했습니다. React를 활용해 퍼블리싱 작업을 진행하면서 반복 작업을 줄이고, 컴포넌트 중심의 개발 방식으로 전환하며 성장했습니다. Atom과 localstorage를 활용하며 여러 방법을 익히고 다양한 시도를 통해 문제 해결 능력을 키웠습니다. 이러한 경험으로 문제 해결과 성장에 집중하는 저의 역량을 보여드릴 수 있습니다.',
          ]
        }
      ],
      date:'2023. 12',
      css:'styled-component',
      skill:'useRecoli / framer-motion / recoilPersist / typeScript(interface)',
    },
    {
      id:'re2',
      career:false,
      bgImg:ImgUrlStieArr.coin.url,
      lib:'React',
      title:'Coins',
      simply:'coingecko api 정보페이지',
      desc:[
        {
          title:'프로젝트 작업 시 문제 해결과 결과',
          text:[
            'Coingecko API를 활용하여 코인 정보페이지를 구축했는데, ApexCharts 라이브러리의 다양한 사용 방법으로 작업하는 데 어려움을 겪었습니다. 불행히도, API 요청 시 보안상의 이유로 발생하는 문제로 인해 CORS 에러가 발생하여 정보를 올바르게 받아오지 못했습니다. 이러한 보안적인 이슈를 해결하기 위해 CORS 문제를 수정하고, 안전한 데이터 통신을 보장하기 위해 추가적인 학습과 작업을 진행할 계획입니다.'
          ]
        }
      ],
      link:`coins`,
      date:'2023. 12',
      css:'styled-component',
      skill:'useRecoli / useQuery(coingecko api) / framer-motion / typeScript(interface) / apexcharts',
      api:'https://www.coingecko.com/api/documentation',
    },
    {
      id:'re3',
      career:false,
      bgImg:ImgUrlStieArr.join.url,
      lib:'React',
      title:'Form',
      simply:'유의사항(checkbox), 회원가입폼(input) 작업',
      desc:[
        {
          title:'프로젝트 작업 시 문제 해결과 결과',
          text:[
            'useForm 라이브러리를 활용했습니다. 체크박스 부분은 실시간 반응을 위해 watch 기능을 이용하여 버튼의 활성화를 조절했습니다. 전체선택, 필수, 선택 등 3가지 상태를 구분하고 표현하는 과정은 적응하기 어려웠지만, 지속적인 탐구와 시도 끝에 성공적으로 구현했습니다. 또한, 컴포넌트 작업 시 useForm의 모든 기능을 숙지하지 못했을 때 ChatGPT를 활용하여 개발했습니다.\nReact의 리랜더링 특성 상 뒤로가기 버튼 클릭 시 입력된 값이 유지되어야 했기에, recoilPersist 라이브러리를 활용하여 로컬 호스트에 값을 저장했습니다. 이를 통해 수정된 값이 자동으로 업데이트되며, 캐시를 지우지 않는 이상 지속적으로 유지되도록 작업했습니다.'
          ]
        }
      ],
      link:`joinstep1`,
      date:'2023. 12',
      css:'styled-component',
      skill:'useRecoli / useForm / recoilPersist / framer-motion / typeScript(interface) ',
    },
    {
      id:'re4',
      career:false,
      bgImg:ImgUrlStieArr.todo.url,
      lib:'React',
      title:'ToDo List',
      simply:'Todo, Doing, Done 맞게 ToDo리스트 상태 변경 가능',
      desc:[
        {
          title:'프로젝트 작업 시 문제 해결과 결과',
          text:[
            '제작 과정에서 useRecoil을 활용하여 데이터 상태 관리를 효율적으로 진행했습니다. 디자인 작업에 있어 다양한 참고 자료를 활용하여 사용자 경험을 개선하였고, 로컬 호스트에 저장되는 데이터가 실제 환경에서 작동하는 것과 유사하게 작업하였습니다.\n추후에는 더 높은 수준의 기술인 MySQL, AWS 등을 습득하여 해당 프로젝트를 더욱 발전시키고자 합니다.'
          ]
        }
      ],
      link:`todo`,
      date:'2023. 12',
      css:'styled-component',
      skill:'useRecoli / useForm / recoilPersist / framer-motion / typeScript(interface) ',
    },
    {
      id:'re5',
      career:false,
      bgImg:ImgUrlStieArr.netflix.url,
      lib:'React',
      title:'Netflix',
      simply:'themoviedb를 이용한 netFlix 따라 만들기 (PC)',
      desc:[
        {
          title:'프로젝트 작업 시 문제 해결과 결과',
          text:[
            '프로젝트를 통해 API 활용 방법을 깊이 이해하게 되었고, framer-motion으로 slider를 구현하는 다양한 방법을 알게 되었습니다. 오류가 발생했을 때는 인터넷을 통해 해결책을 찾기 위해 많은 노력을 기울였습니다. 문제에 정확한 해답이 없더라도 유사한 상황을 찾아내고 수정해나가면서 프로젝트를 진행했습니다. '
          ]
        }
      ],
      link:`netflix`,
      date:'2023. 12',
      css:'styled-component',
      skill:'useRecoli / useForm / useQuery(themoviedb api) / recoilPersist / framer-motion / typeScript(interface) ',
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
      desc:[
        {
          title:'동적 기획서 반영으로 퍼블리싱 지속 업데이트 및 파일 정리',
          text:[
            '기획 중인 부분을 제외한 모든 페이지 작업을 기획서를 확인한 후 진행했습니다. 매번 업데이트되는 기획서와 작업한 코드를 비교하여 변경된 부분을 철저히 삭제하고, 최신 업데이트된 기획서를 반영하여 퍼블리싱을 지속적으로 업데이트하여 프로젝트 기한을 준수했습니다.',
            '작업이 완료되지 않은 페이지와 영역은 유지보수 팀에게 전달하기 위해 파일 정리를 진행했습니다. 작업된 파일명에 기획서 버전을 명시하고, 작업 중인 페이지에 대한 설명을 포함하여 전달했습니다.'
          ]
        },
        {
          title:'Vue 및 Vuetify를 활용한 퍼블리싱 향상과 모듈 유연성 확보',
          text:[
            '기획서를 기반으로 페이지 및 모듈 기획을 분석하고, 디자이너가 작성한 스타일 가이드를 준수하여 Vue 및 Vuetify를 활용해 모듈을 개발했습니다. 이를 통해 일관된 디자인을 유지하고 통일성을 강조하여 프로젝트의 퍼블리싱과 프론트엔드 개발의 속도를 향상시켰습니다.',
            '서로 다른 기능에서도 가능한 한 하나의 모듈에서 작업하여, 다른 디자인을 적용하는 경우에도 유연하게 대처할 수 있도록 하였습니다. 이를 통해 유지보수성을 향상시켰습니다',
            '관리자 페이지에서 많이 활용되는 테이블을 다루는데, Real Grid라는 데이터 그리드를 활용하여 데이터 삽입 및 스타일링, 사용자 정의 기능을 구현하며 그 사용법을 습득했습니다.'
          ]
        },
      ],
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
      id:'ca3',
      bgImg:ImgUrlStieArr.allra.url,
      lib:'Vue',
      career:true,
      title:'allra',
      simply:'쇼핑몰 선정산 핀테크 서비스',
      desc:[
        {
          title:'코드 유연성과 모듈화 작업으로 디자인 변화 대응 및 효율성 향상 노력',
          text:[
            '디자인 변경 사항이 코드에 영향을 미치지 않도록 하기 위해 코드를 유연하게 설계하고 작업했습니다.',
            '신규 페이지를 구성할 때, 클래스와 HTML 마크업을 컴포넌트 단위로 분할하여 모듈화하고 확장성을 고려한 작업을 진행했습니다.',
            '기획팀에서 요청한 간단한 기능들을 개발팀에 의존하지 않고 직접 구현하여 효율성을 높였습니다.',
            '가능한 간단한 데이터 바인딩을 적용하여 사용자 경험을 향상시켰습니다.'
          ]
        },
        {
          title:'기획과 개발간의 작업 일정 조율과 실행 가능성 검토로 협업 강화',
          text:[
            '담당업무에 기획자와 개발자 간의 작업 일정 조율과 업무 분담은 실현 가능성과 작업 시간을 조정하고 조율하여 원활한 협업을 이끌어냈습니다. 또한, 실제 구현 가능성에 대한 검토를 통해 프로젝트의 실행 가능성을 높였습니다.',
            '와이어프레임 제작 과정에 적극적으로 참여하여 초기 단계에서부터 프로젝트에 기여했습니다.',
          ]
        },
      ],
      display:'반응형',
      date:'2022.10 ~ 2023.05',
      skill:'vue / scss / gitlab / html',
      tool:
       {
          design:'Figma',
          schedule:'Flow',
          collabo:'Flow',
       },
       link:'https://www.allra.co.kr/',
       site:[
        {
          name:'allra Ai장부',
          display:'적응형(PC)',
          desc:'쇼핑몰 선정산 서비스와 연동된 장부',
          link:'https://ai.allra.co.kr/'
        },
      ]
    },
    {
      id:'ca4',
      bgImg:ImgUrlStieArr.kace.url,
      lib:'kacelab',
      career:true,
      title:'Kacelab',
      simply:'스타트업 에이전시',
      desc:[
        {
          title:'다양한 프로젝트 작업',
          text:[
            '다양한 사용자 그룹을 고려한 쇼핑몰, 지도 기반의 골프 예약, 차량 렌트 등 다양한 서비스를 포함한 웹사이트 구축 프로젝트에 참여했습니다.'
          ]
        },
        {
          title:'브라우저 호환성 고려와 다양한 플랫폼 최적화로 웹 성능 향상',
          text:[
            '다양한 브라우저의 다운그레이드 버전을 고려하여 작업하여, 호환성을 확보했습니다.',
            '웹앱, 하이브리드 앱, 적응형 및 반응형 사이트를 구축하여, 다양한 플랫폼 및 환경에서의 최적 성능을 보장했습니다.'
          ]
        },
        {
          title:'요구사항 변화와 외부 개발자 소통으로 프로젝트 일정 관리',
          text:[
            '클라이언트의 요구사항 변화에 따라 추가 작업을 관리하고 조율하여 스케줄을 조정했습니다.',
            '외부 개발자와의 원활한 소통을 통해 기한을 조율하고, 프로젝트 일정을 조화롭게 진행했습니다.'
          ]
        },
      ],
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
          display:'하이브리드앱',
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
      desc:[
        {
          title:'쇼핑몰 주요 페이지 퍼블리싱 및 UI/UX 리뉴얼 프로젝트 참여',
          text:[
            '쇼핑몰 사이트의 주요 페이지인 (홈), 쇼핑카트, 구매내역, 결제상세내역, 상품상세페이지, 마이페이지 등의 퍼블리싱을 담당했습니다.',
            '기획자, 디자이너, 마케팅 담당자와의 협업을 위한 회의에 적극적으로 참여하여, 효율적인 커뮤니케이션과 팀 협업을 이끌었습니다.',
          ]
        },
        {
          title:'신규 페이지 구축 및 운영 업무 지원',
          text:[
            '선물하기, 쿠폰 등 신규 기능을 추가하기 위한 페이지 퍼블리싱 작업을 수행했습니다. 또한, 기획자와 마케팅팀의 운영을 위한 이벤트 페이지를 새롭게 생성하고 관리했습니다.',
          ]
        },
        {
          title:'디자인 일관성 강조를 위한 클래스 정리와 가이드 준수',
          text:[
            '새로운 스타일가이드 및 디자인 방향을 디자이너와 같이 설계하여, 통일된 디자인과 사용자 경험을 제공할 수 있는 방향성을 설정했습니다.',
            '기존에 산재되어 있던 디자인 규칙의 불일치와 불필요한 클래스를 정리하고, 디자인 가이드에 맞춰 새로운 클래스를 설정하여 통일성 있는 디자인을 확립했습니다. 이를 통해 일관된 디자인과 사용성을 강조하며 개발 환경을 조성하는 데 기여했습니다.'
          ]
        },
      ],
      display:'반응형 웹',
      date:'2020.11 ~ 2021.10 (계약직)',
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
      desc:[
        {
          title:'실무 적응과 단독 페이지 제작·유지보수',
          text:[
            '디자인과 동일한 결과물을 유지하기 위해 작업을 준수하고, 다양한 디바이스와 브라우저에서의 호환성을 고려하여 CSS와 HTML 작업을 진행했습니다. iOS, Android, Windows, macOS 등 각 플랫폼에서 동일한 화면이 나타나도록 노력했습니다.',
            '혼자서 모든 페이지의 유지보수와 서비스 페이지 제작을 담당했습니다. 학원에서 배운 내용과 실제 업무에서의 요구 사항 사이에 존재하는 차이를 극복하기 위해, 모든 페이지의 코드를 면밀히 분석하고, 새로운 제작 방식에 대한 적응을 위해 코드를 재구성했습니다. 초기에는 배운 내용과의 간극을 줄이기 위해 코드를 비슷한 패턴으로 변경하고, 이를 통해 실무에 더욱 적응해 나갔습니다.'
          ]
        }
      ],
      display:'반응형 웹',
      date:'2020.08 ~ 2020.10',
      skill:'jQuery / css / html',
      tool:
       {
          design:'Zeplin',
          schedule:'Jira',
          collabo:'Slack',
       },
       link:'https://www.hakdokman.com/'
    },
  ],
  vue:[

  ]
}