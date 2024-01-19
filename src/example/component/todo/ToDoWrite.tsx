import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { IToDo, toDoAtom } from "../../atom/todoAtom";
import { ErrorText } from "../../css/joinStyle";
import { Relative } from "../../css/Exacommon";

function ToDoWrite() {
  const [selec, setSelect] = useState("");
  const setToDos = useSetRecoilState(toDoAtom);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IToDo>({
    defaultValues: {
      cate: "ToDo",
    },
  });
  const handlerSubmit = ({ cate, title, text }: IToDo) => {
    setToDos((oldTodo) => [{ id: Date.now(), cate, title, text }, ...oldTodo]);
    reset();
  };
  const onInput = (e: React.FormEvent<HTMLSelectElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setSelect(value);
  };

  return (
    <form onSubmit={handleSubmit(handlerSubmit)}>
      <div className="todo__write__box">
        <div>
          <label htmlFor="cate">category .</label>
          <select
            id="cate"
            {...register("cate")}
            onInput={onInput}
            value={selec}
          >
            <option value="ToDo">ToDo</option>
            <option value="Doing">Doing</option>
            <option value="Done">Done</option>
          </select>
        </div>
        <div>
          <label htmlFor="tit">title .</label>
          <Relative>
            <input
              {...register("title", {
                required: "한글자 이상 작성하셔야 합나다.",
                minLength: 1,
              })}
              type="text"
              id="tit"
            />
            <ErrorText>{errors.title?.message}</ErrorText>
          </Relative>
        </div>
        <div>
          <label htmlFor="txt">text .</label>
          <Relative>
            <textarea
              {...register("text", {
                required: "한글자 이상 작성하셔야 합나다.",
                minLength: 1,
                maxLength: {
                  value: 300,
                  message: "300자 이내로 적어주세요.",
                },
              })}
              id="txt"
            ></textarea>
            <ErrorText>{errors.text?.message}</ErrorText>
          </Relative>
        </div>
        <button className="btn__write save">Save</button>
      </div>
    </form>
  );
}
export default ToDoWrite;
