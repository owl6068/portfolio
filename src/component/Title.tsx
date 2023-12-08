import styled from "styled-components";

export const Tit = styled.h1<{ size: string }>`
  white-space: pre-wrap;
  font-size: ${(props) =>
    props.size === "l"
      ? props.theme.title.size_l
      : props.size === "m"
      ? props.theme.title.size_m
      : props.theme.title.size_s};
  font-weight: 900;
`;
interface ITitle {
  as: string;
  text: string;
  size: string;
}
function Title({ as = "h1", text, size }: ITitle) {
  return (
    <Tit as={as} size={size}>
      {text}
    </Tit>
  );
}
export default Title;
