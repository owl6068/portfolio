
export interface IPageId {
  id:string,
}
export interface IHeaderNav {
  id:string,
  name:string,
  img?:string,
}
export interface IMyInfoTag {
  id:string,
  name:string,
}
export interface IMySkill {
  name:string,
  img:string,
  adept:number
}
export interface IPortFolioTool {
  design:string,
  schedule:string,
  collabo:string,
}
export interface IPortFolioSite {
  name:string,
  display:string,
  desc:string,
  link?:string
}
export interface IPortFolioNav {
  id:string,
  bgImg?:string,
  logoImg:string,
  career:boolean,
  title:string,
  simply:string,
  desc:string,
  display?:string,
  date:string,
  skill:string,
  site?:IPortFolioSite[],
  tool?:IPortFolioTool,
  css?:string,
  api?:string,
  link?:string
}

export interface IPTInfo {
 career:IPortFolioNav[],
 react:IPortFolioNav[],
 vue:IPortFolioNav[],
}