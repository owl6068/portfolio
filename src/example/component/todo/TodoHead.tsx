import { Link } from "react-router-dom";
import { TodoHeader } from "../../css/ToDoStyle";

function ToDoHead() {
  const nowMonth = new Date().getMonth() + 1;
  return (
    <TodoHeader>
      <Link to="/portfolio" className="head__left">
        🏠
      </Link>
      <h2 className="head__monday">{nowMonth}월</h2>
      <div className="head__right">🍔</div>
    </TodoHeader>
  );
}

export default ToDoHead;
