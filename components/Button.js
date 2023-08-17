import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #23d9f8;
  border: 0;
  color: #000;
  padding: 5px 15px;
  border-radius: 5px;
`;

export default function Button({ children }) {
  return <StyledButton>{children}</StyledButton>;
}
