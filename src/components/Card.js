import React from "react";
import styled from "styled-components";

const Card = ({
  company,
  company_logo,
  created_at,
  description,
  title,
  type,
  location,
  link,
}) => {
  let date = created_at.slice(4, 10);

  return (
    <Container>
      <StyledImg src={company_logo} alt={company} />
      <Gray>{`${date} • ${type}`}</Gray>
      <StyledLink href={link} target="_blank" rel="noopener">
        <p>{title}</p>
      </StyledLink>
      <Gray>{company}</Gray>
      <Loc>{location}</Loc>
    </Container>
  );
};

const Container = styled.div`
  width: 350px;
  background-color: ${({ theme }) => theme.formColor};
  padding: 1rem;
`;

const Loc = styled.p`
  color: ${({ theme }) => theme.headerColor};
`;

const StyledImg = styled.img`
  background-color: ${({ theme }) => theme.btnColor};
  width: 50px;
  height: 50px;
  border-radius: 0.5rem;
  margin-top: -4rem;
  padding: 0.2rem;
  object-fit: cover;
`;

const Gray = styled.p`
  opacity: 55%;
  margin: 1rem 0;
`;

const StyledLink = styled.a`
  &:hover {
    color: ${({ theme }) => theme.btnColor};
  }
`;

export default Card;
