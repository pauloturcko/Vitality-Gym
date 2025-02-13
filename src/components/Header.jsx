import React from "react";
import styled from "styled-components";
import Logo from "../assets/pink_logo.svg?react";
import Button from "./Button";

const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo />
      <Button text="Login" />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  width: 100%;
  height: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 9.375rem;
`;

const StyledLogo = styled(Logo)`
  width: 3.75rem;
  height: 3.75rem;
`;

export default Header;
