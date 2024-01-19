import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist'
import { IFormList } from "../interface/join";

const { persistAtom } = recoilPersist({
  key: 'recoil-persist',
  storage: localStorage,
})

export const joinStep1Atom = atom({
  key:'step1',
  default:[],
  effects_UNSTABLE: [persistAtom],
})

const initialFormList: IFormList = {
  id: '',
  nick: '',
  image: '',
  pw: '',
  pw2: '',
  email: '',
  radio: '',
};

export const joinStep2Atom = atom<IFormList>({
  key:'step2',
  default:initialFormList,
  effects_UNSTABLE: [persistAtom],
})