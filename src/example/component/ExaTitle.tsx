import styled from "styled-components";

const ExaTit = styled.h1<{ color?: string; size?: string }>`
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
  font-weight: 900;
`;
interface IExaTitle {
  as?: string;
  text: string;
  color?: string;
  size?: string;
}

function ExaTitle({
  as = "h1",
  text,
  color = "#222",
  size = "20px",
}: IExaTitle) {
  return (
    <ExaTit as={as} color={color} size={size}>
      {text}
    </ExaTit>
  );
}
export default ExaTitle;
