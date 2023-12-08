import { atom } from "recoil";

export const windowWidthAtom = atom<number>({
  key:'wWidth',
  default:0
})

export const windowHeightAtom = atom<number>({
  key:'wheight',
  default:0
})

export const pcWid = atom<number>({
  key:'pcwidth',
  default: 1240
})

export const moWid = atom<number>({
  key:'mowidth',
  default: 850
})