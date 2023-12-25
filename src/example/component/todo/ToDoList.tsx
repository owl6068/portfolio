import { useRecoilState } from "recoil";
import { IToDo, toDoAtom } from "../../atom/todoAtom";
import { BtnControl, BtnControlBox, ToDoLi } from "../../css/ToDoStyle";
import { DFlexBtw } from "../../../css/common";
import { tabmenu } from "../../page/todo/toDoTabMenu";

function ToDoList({ id, cate, title, text }: IToDo) {
  const [todos, setToDos] = useRecoilState(toDoAtom);
  const onclick = (type: string) => {
    setToDos((prev) => {
      const todoIndex = todos.findIndex((data) => data.id === id);
      const newTodoArr = [
        ...prev.slice(0, todoIndex),
        { id, cate: type as any, title, text },
        ...prev.slice(todoIndex + 1),
      ];
      const delTodoArr = [
        ...prev.slice(0, todoIndex),
        ...prev.slice(todoIndex + 1),
      ];
      if (type !== "Del") {
        return newTodoArr;
      } else {
        if (window.confirm("삭제 하시겠습니까?")) {
          return delTodoArr;
        } else {
          return prev;
        }
      }
    });
  };
  const year = new Date(id).getFullYear();
  const Month = new Date(id).getMonth();
  const day = new Date(id).getDate();
  const hour = new Date(id).getHours();
  const minut = new Date(id).getMinutes();
  return (
    <ToDoLi key={id}>
      <div className="todo__info">
        <DFlexBtw className="todo__info__date">
          <strong>
            {year}년{Month}월{day}일 / {hour}시{minut}분
          </strong>
          <strong>{cate}</strong>
        </DFlexBtw>
        <br />
        <strong className="todo__info__title">{title}</strong>
        <div className="todo__info__detail">{text}</div>
      </div>
      <BtnControlBox>
        {tabmenu.map(
          (btn, i) =>
            cate !== btn.name && (
              <BtnControl
                key={"btn" + id + i}
                type="button"
                bgcolor={btn.bgcolor}
                color={btn.color}
                onClick={() => onclick(`${btn.name}`)}
              >
                {btn.name}
              </BtnControl>
            )
        )}
      </BtnControlBox>
    </ToDoLi>
  );
}
export default ToDoList;
