import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  TodoWrap,
  TodoContant,
  TodoListType,
  TabBtnBox,
  TabBtn,
  ToDoLi,
  TodoWriteBox,
} from "../../css/ToDoStyle";
import { useRecoilState, useRecoilValue } from "recoil";
import { Helmet } from "react-helmet";
import { cateAtom, toDoSelector } from "../../atom/todoAtom";
import { DFlexBtw } from "../../../css/common";
import ToDoWrite from "../../component/todo/ToDoWrite";
import { tabmenu } from "./toDoTabMenu";
import ToDoList from "../../component/todo/ToDoList";
import { ExaContainer } from "../../css/Exacommon";

function ToDo() {
  const toDay = new Date().getDate();
  const toDos = useRecoilValue(toDoSelector);
  const [tabCategory, setTabCategory] = useRecoilState(cateAtom);

  const [addNew, setAddNew] = useState(false);
  const newTodoHandeler = () => {
    setAddNew((prev) => !prev);
  };

  const onclick = (cate: string) => {
    setTabCategory(cate);
    setAddNew(false);
  };

  const writeVariants = {
    initial: { height: 0, opacity: 0 },
    animate: {
      height: "auto",
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        height: { duration: 0.3 },
      },
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: {
        height: { duration: 0.3 },
        opacity: { delay: 0.2, duration: 0.2 },
      },
    },
  };

  const listVariants = {
    open: {
      y: 0,
    },
    close: {
      y: "calc(100% - 70px)",
    },
  };
  return (
    <TodoWrap>
      <Helmet>
        <title>Todo</title>
      </Helmet>
      <ExaContainer>
        <TodoContant className="todo__contant">
          <DFlexBtw>
            <div className="todo__day">
              <strong>Today</strong>
              <span>{toDay} day</span>
            </div>
            <button className="btn__write add" onClick={newTodoHandeler}>
              {addNew ? "Add Close" : "Add New"}
            </button>
          </DFlexBtw>
          <AnimatePresence>
            {addNew ? (
              <TodoWriteBox
                variants={writeVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <ToDoWrite />
              </TodoWriteBox>
            ) : null}
          </AnimatePresence>
        </TodoContant>
        <TodoListType
          variants={listVariants}
          animate={!addNew ? "open" : "close"}
          transition={{
            bounce: 0.25,
          }}
        >
          <TabBtnBox>
            <div>
              {tabmenu.slice(0, 3).map((btn) => (
                <TabBtn
                  key={btn.id}
                  type="button"
                  className={tabCategory === btn.name ? "isActive" : ""}
                  onClick={() => onclick(`${btn.name}`)}
                >
                  {btn.name}
                </TabBtn>
              ))}
            </div>
          </TabBtnBox>
          <motion.div
            style={{
              backgroundColor: "#f1f1f1",
              height: "calc(100vh - 262px)",
              padding: "40px 0",
            }}
          >
            <motion.div className="scroll">
              <motion.ul>
                {toDos.length === 0 ? (
                  <ToDoLi>
                    <strong className="todo__info__title">{tabCategory}</strong>
                    <p className="todo__info__text">현재 비어있습니다.</p>
                  </ToDoLi>
                ) : (
                  toDos?.map((data, i) => (
                    <ToDoList key={"todo" + i} {...data} />
                  ))
                )}
              </motion.ul>
            </motion.div>
          </motion.div>
        </TodoListType>
      </ExaContainer>
    </TodoWrap>
  );
}

export default ToDo;
