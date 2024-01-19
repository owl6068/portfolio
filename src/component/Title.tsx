import styled from "styled-components";

export const Tit = styled.h1<{ color: string }>`
  white-space: pre-wrap;
  font-weight: 900;
  transition: font 0.3s;
  color: ${(props) => props.color};
  &.title__size-l {
    font-size: 50px;
  }
  &.title__size-m {
    font-size: 40px;
  }
  &.title__size-s {
    font-size: 30px;
  }
  &.title__size-ss {
    font-size: 22px;
  }
  @media screen and (max-width: 850px) {
    &.title__size-l {
      font-size: 32px;
    }
    &.title__size-m {
      font-size: 26px;
    }
    &.title__size-s {
      font-size: 22px;
    }
    &.title__size-ss {
      font-size: 18px;
    }
  }
`;
interface ITitle {
  as?: string;
  text: string;
  size: string;
  color?: string;
}
function Title({ as = "h1", text, size, color = "#222" }: ITitle) {
  return (
    <Tit as={as} className={`title__size-${size}`} color={color}>
      {text}
    </Tit>
  );
}
export default Title;
