import styled, { css } from "styled-components";

export const ButtonStyle = css`
  border: 0;
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  font-family: "Satisfy", cursive;
  font-weight: 800;
  svg {
    height: 20px;
    margin-right: 10px;
  }
  ${(props) =>
    props.white &&
    !props.outline &&
    css`
      background-color: #fff;
      color: #000;
    `}
  ${(props) =>
    props.white &&
    props.outline &&
    css`
      background-color: transparent;
      font-weight: 600;
      color: #6495ed;
      border: 2px solid #7df9ff;
    `}
  ${(props) =>
    props.primary &&
    !props.outline &&
    css`
      background-color: #6f8faf;
      border: 2px solid #6f8faf;
      color: #fff;
    `}
  ${(props) =>
    props.primary &&
    props.outline &&
    css`
      background-color: #a6f8ee;
      border: 2px solid #1b4685;
      color: #1b4685;
    `}
`;

const StyledButton = styled.button`
  ${ButtonStyle}
`;

export default function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}
