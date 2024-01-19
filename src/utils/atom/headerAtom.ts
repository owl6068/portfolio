import { atom } from "recoil";

export const navMenuAtom = atom<boolean>({
  key:'nav',
  default:false
})

export const toolTipAtom = atom<boolean>({
  key:'toolTip',
  default:false
})