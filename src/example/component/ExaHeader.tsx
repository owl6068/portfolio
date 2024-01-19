import { Link, useNavigate } from "react-router-dom";
import { ExaHead } from "../css/Exacommon";

interface IPageName {
  pageName: string;
}

function ExaHeader({ pageName }: IPageName) {
  const navigate = useNavigate();
  return (
    <ExaHead>
      <button
        className="head__left"
        onClick={() => {
          navigate("/");
        }}
      >
        🏠
      </button>

      <h2 className="head__center overflow">{pageName}</h2>
    </ExaHead>
  );
}

export default ExaHeader;
