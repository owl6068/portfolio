
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
 interface IPortFolioSite {
  name:string,
  display:string,
  desc:string,
  link?:string
}

interface Idesc {
  title:string,
  text:string[]
}
export interface IPortFolioInfo {
  id:string,
  bgImg?:string,
  lib:string,
  career:boolean,
  title:string,
  simply:string,
  desc?:Idesc[],
  display?:string,
  date:string,
  skill:string,
  site?:IPortFolioSite[],
  tool?:IPortFolioTool,
  css?:string,
  api?:string,
  link?:string
}
export interface IPortFolioInfoAtom {
 career:IPortFolioInfo[],
 react:IPortFolioInfo[],
 vue:IPortFolioInfo[],
}