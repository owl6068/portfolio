import { Btn } from "../../css/joinStyle";

interface INextButton {
  text: string;
  disabled?: boolean;
  onClick: () => void;
}

function NextButton({ text, disabled, onClick }: INextButton) {
  return (
    <Btn disabled={!disabled} onClick={onClick}>
      {text}
    </Btn>
  );
}

export default NextButton;
