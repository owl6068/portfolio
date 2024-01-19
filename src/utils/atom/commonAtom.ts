import { atom, selector } from "recoil";
import { portfolioListAtom } from "./portFolioAtom";
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()
export const windowWidthAtom = atom<number>({
  key:'wWidth',
  default:0
})

export const windowHeightAtom = atom<number>({
  key:'wheight',
  default:0
})

export const pcWidthAtom = atom<number>({
  key:'pcWidthAtom',
  default: 1240
})

export const moWidthAtom = atom<number>({
  key:'moWidthAtom',
  default: 850
})

export const modalPFAtom = atom<string>({
  key:'modalPF',
  default: 'false'
})

export const modalPFInfoAtom = atom<string>({
  key:'modalinfoPf',
  default: ''
})

export const filterModalPFIntoSelector = selector({
  key:'filterModalPFIntoSelector',
  get:({get}) =>{
    const id = get(modalPFInfoAtom)
    const portfolio = get(portfolioListAtom)
    const allfilter = [...portfolio.career,...portfolio.react,...portfolio.vue];

    return allfilter.filter(data => data.id === id)
  }
})
