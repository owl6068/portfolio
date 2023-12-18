import styled from "styled-components";

const ExaTit = styled.h1<{ color?: string; size?: string; padding?: string }>`
  padding: ${(props) => props.padding};
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
  line-height: 1.4;
  font-weight: 900;
  white-space: pre-wrap;
`;
interface IExaTitle {
  as?: string;
  text: string;
  color?: string;
  size?: string;
  padding?: string;
}

function ExaTitle({
  as = "h1",
  text,
  color = "#222",
  size = "20px",
  padding,
}: IExaTitle) {
  return (
    <ExaTit as={as} color={color} size={size} padding={padding}>
      {text}
    </ExaTit>
  );
}
export default ExaTitle;
