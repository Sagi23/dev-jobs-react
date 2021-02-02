import React from "react";
import styled from "styled-components";
import Card from "./Card";

const CardList = ({
  results,
  getData,
  isLoading,
  nameValue,
  locationValue,
  fullTime,
  page,
  setPageNum,
}) => {
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
      link={result.url}
    />
  ));

  const handleClick = () => {
    parseInt(page);
    setPageNum(page + 1);
    toString(page);
    getData(nameValue, fullTime, locationValue, page);
    console.log(page);
  };
  return (
    <Container>
      {renderdCards}
      {results.length > 0 ? (
        <StyledDiv>
          <StyledBtn onClick={handleClick}>Load More</StyledBtn>
        </StyledDiv>
      ) : null}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin: 5rem auto 0;
  gap: 2rem;
  justify-content: center;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

const StyledBtn = styled.button`
  padding: 0.5rem 1rem;
  color: white;
  background-color: ${({ theme }) => theme.btnColor};
  border: none;
  border-radius: 0.5rem;
  margin-left: 0rem;
  font-size: 16px;
  cursor: pointer;
`;

export default CardList;
