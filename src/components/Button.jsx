import React from "react";
import styled from "styled-components";

const Button = ({ text }) => {
  return <StyledButton>{text}</StyledButton>;
};

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.mainColor};
  color: ${({ theme }) => theme.colors.textMainColor};
  text-transform: uppercase;
  padding: 5px 25px;
  font-size: 1rem;
`;

export default Button;
