import React from "react";
import styled from "styled-components";
import Card from "./Card";

const CardList = ({ results }) => {
  const renderdCards = results.map((result) => (
    <Card
      key={result.id}
      company={result.company}
      company_logo={result.company_logo}
      created_at={result.created_at}
      description={result.description}
      title={result.title}
      type={result.type}
      location={result.location}
      link={result.how_to_apply}
    />
  ));
  return <Container>{renderdCards}</Container>;
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin: 5rem auto 0;
  gap: 2rem;
  justify-content: center;
`;

export default CardList;
