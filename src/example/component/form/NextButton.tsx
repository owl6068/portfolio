import { useNavigate } from "react-router-dom";
import { BtnNextBox } from "../../css/joinStyle";

interface INextButton {
  text: string;
  disabled: boolean;
  onClick: () => void;
}

function NextButton({ text, disabled, onClick }: INextButton) {
  const navigate = useNavigate();

  const handleNext = () => {
    onClick();
    navigate("/portfolio/joinstep2");
  };

  return (
    <BtnNextBox>
      <button className="btn__next" disabled={!disabled} onClick={handleNext}>
        {text}
      </button>
    </BtnNextBox>
  );
}

export default NextButton;
