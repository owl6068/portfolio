import { atom, selector } from "recoil";
import { IPTInfo } from "../interface/PFinterface";
import { PortFolioList } from "../utilArr";

export const portfolioBtnAtom = atom<string>({
  key:'PTBtn',
  default:'All'
})

export const portfolioListAtom = atom<IPTInfo>({
  key: 'PTList',
  default: PortFolioList,
});

export const filterPortFolioList = selector({
  key:'filterPTList',
  get:({get})=>{
    const activeBtn = get(portfolioBtnAtom)
    const portfolio = get(portfolioListAtom)
    
    const allfilter = [...portfolio.react,...portfolio.career,...portfolio.vue];
    const creerfilter = allfilter.filter(career => career.career === true)
    const reactfilter = allfilter.filter(react => react.logoImg === 'React')
    const vuefilter = allfilter.filter(vue => vue.logoImg === 'Vue')

    switch(activeBtn) {
      case 'All':
        return allfilter
      case 'Career':
        return creerfilter
      case 'React':
        return reactfilter
      case 'Vue':
        return vuefilter
    }
    
    return creerfilter
  },
})