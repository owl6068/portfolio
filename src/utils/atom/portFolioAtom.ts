import { atom, selector } from "recoil";
import { IPortFolioInfoAtom } from "../interface/PFinterface";
import { PortFolioList } from "../array/utilArr";

export const portfolioBtnAtom = atom<string>({
  key:'PTBtn',
  default:'All'
})

export const portfolioListAtom = atom<IPortFolioInfoAtom>({
  key: 'PTList',
  default: PortFolioList,
});

export const filterPFListSelector = selector({
  key:'filterPTList',
  get:({get})=>{
    const activeBtn = get(portfolioBtnAtom)
    const portfolio = get(portfolioListAtom)
    
    const allfilter = [...portfolio.career,...portfolio.react,...portfolio.vue];
    const creerfilter = allfilter.filter(career => career.career === true)
    const reactfilter = allfilter.filter(react => react.lib === 'React')
    const vuefilter = allfilter.filter(vue => vue.lib === 'Vue')

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