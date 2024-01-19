import { atom, selector } from "recoil";
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist({
  key: 'recoil-persist',
  storage: localStorage,
})

export interface IToDo {
  id:number,
  cate:'ToDo'|'Doing'|'Done',
  title:string,
  text:string
}

export const toDoAtom = atom<IToDo[]>({
  key:'toDo',
  default:[],
  effects_UNSTABLE: [persistAtom]
})

export const cateAtom = atom({
  key:'category',
  default:'ToDo',
})

export const toDoSelector = selector({
  key:'toDoSelet',
  get:({get}) => {
    const todos = get(toDoAtom);
    const cate = get(cateAtom);
    const result = todos.filter((toDo) => toDo.cate === cate);
    return result;
  }
})
