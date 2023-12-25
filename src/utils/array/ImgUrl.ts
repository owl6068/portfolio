import { IImgUrlEtcArr, IImgUrlSkilArr, IImgUrlStieArr } from "../interface/ImgUrlinterface";

const IMGURLBASIC = `${process.env.PUBLIC_URL}/img`;

// img
export const ImgUrlEtcArr : IImgUrlEtcArr = {
  smile:{
    url: `${IMGURLBASIC}/smile.svg`
  },
  phone:{
    url: `${IMGURLBASIC}/phone.svg`
  },
  bar:{
    url: `${IMGURLBASIC}/bar.svg`
  },
  warning:{
    url: `${IMGURLBASIC}/warning.png`
  },
  close:{
    url: `${IMGURLBASIC}/close.svg`
  },
  loading:{
    url: `${IMGURLBASIC}/loading.svg`
  }
}

// img < logo
export const ImgUrlSkilArr :IImgUrlSkilArr = {
  boot:{
    url: `${IMGURLBASIC}/logo/boot.svg`
  },
  css:{
    url: `${IMGURLBASIC}/logo/css.svg`
  },
  grid:{
    url: `${IMGURLBASIC}/logo/grid.svg`
  },
  html:{
    url: `${IMGURLBASIC}/logo/html.svg`
  },
  jquery:{
    url: `${IMGURLBASIC}/logo/jquery.svg`
  },
  js:{
    url: `${IMGURLBASIC}/logo/js.svg`
  },
  react:{
    url: `${IMGURLBASIC}/logo/react.svg`
  },
  sass:{
    url: `${IMGURLBASIC}/logo/sass.svg`
  },
  styled:{
    url: `${IMGURLBASIC}/logo/styled.svg`
  },
  ts:{
    url: `${IMGURLBASIC}/logo/ts.svg`
  },
  vue:{
    url: `${IMGURLBASIC}/logo/vue.svg`
  },
  vuetify:{
    url: `${IMGURLBASIC}/logo/vuetify.svg`
  },
}

// img < site
export const ImgUrlStieArr : IImgUrlStieArr = {
  allra:{
    url: `${IMGURLBASIC}/site/allra.png`
  },
  allraai:{
    url: `${IMGURLBASIC}/site/allraai.png`
  },
  dbdb:{
    url: `${IMGURLBASIC}/site/dbdb.png`
  },
  hak:{
    url: `${IMGURLBASIC}/site/hak.png`
  },
  kace:{
    url: `${IMGURLBASIC}/site/kace.png`
  },
  msPF:{
    url: `${IMGURLBASIC}/site/msPF.png`
  },
  skt:{
    url: `${IMGURLBASIC}/site/skt.png`
  },
  coin:{
    url: `${IMGURLBASIC}/site/coin.png`
  },
  join:{
    url: `${IMGURLBASIC}/site/join.png`
  },
  todo:{
    url: `${IMGURLBASIC}/site/todo.png`
  },
  netflix:{
    url: `${IMGURLBASIC}/site/netflix.png`
  },
}