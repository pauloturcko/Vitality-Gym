import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../assets/pink_logo.svg?react";

const Header = () => {
  return (
    <StyledHeader>
      <StyledNav>
        <StyledLogo />
        <LinksDiv>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/plans">Plans</StyledLink>
          <StyledLink to="/login">Login</StyledLink>
        </LinksDiv>
      </StyledNav>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 0 9rem;
  width: 100%;
  height: 10rem;
`;

const StyledNav = styled.nav`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLogo = styled(Logo)`
  width: 3.75rem;
  height: 3.75rem;
`;

const LinksDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

const StyledLink = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.textMainColor};
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 0;
    height: 3px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.mainColor};
    transition: width 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`;

export default Header;
