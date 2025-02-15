import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Sport = ({ src, alt, linkTitle, description }) => {
  return (
    <StyledDiv>
      <StyledImg src={src} alt={alt} />
      <StyledDescriptionDiv>
        <StyledDescription>{description}</StyledDescription>
        <StyledLink to="/plans">{linkTitle}</StyledLink>
      </StyledDescriptionDiv>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6.25rem;
`;

const StyledImg = styled.img`
  width: auto;
  height: auto;
  display: block;
`;

const StyledDescriptionDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.125rem;
`;

const StyledDescription = styled.p`
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme }) => theme.colors.mainTextColor};
  font-size: 1.375rem;
  font-weight: 400;
`;

const StyledLink = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme }) => theme.colors.mainColor};
  font-size: 1.4rem;
  font-weight: 600;
`;

export default Sport;
