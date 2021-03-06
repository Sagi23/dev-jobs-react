import React from "react";
import { BsSearch } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import styled from "styled-components";
import { mediaQueries } from "../styles/theme";

const SearchForm = ({
  getData,
  isLoading,
  nameValue,
  handleNameChange,
  locationValue,
  handleLocationChange,
  fullTime,
  setFullTime,
  page,
  setPageNum,
}) => {
  const handleSumit = (e) => {
    e.preventDefault();
    setPageNum(1);
    getData(nameValue, fullTime, locationValue, page);
  };

  return (
    <>
      {isLoading ? (
        <h2 style={{ textAlign: "center", marginTop: "2rem" }}>Loading</h2>
      ) : (
        <StyledFormContainer onSubmit={(e) => handleSumit(e)}>
          <Divider>
            <IconLabel htmlFor="search">
              <BsSearch />
            </IconLabel>
            <StyledTextInput
              type="text"
              id="search"
              value={nameValue}
              onChange={(e) => handleNameChange(e)}
              placeholder="Search by Title"
            />
          </Divider>
          <Divider>
            <IconLabel htmlFor="location">
              <GoLocation />
            </IconLabel>
            <StyledTextInput
              type="text"
              id="location"
              value={locationValue}
              onChange={(e) => handleLocationChange(e)}
              placeholder="Search by Location"
            />
          </Divider>
          <Divider>
            <input
              type="checkbox"
              id="checkbox"
              onClick={() => setFullTime(!fullTime)}
            />
            <FullLabel htmlFor="checkbox">Full Time Only</FullLabel>
          </Divider>
          <StyledBtn type="submit">Submit</StyledBtn>
        </StyledFormContainer>
      )}
    </>
  );
};

const IconLabel = styled.label`
  color: ${({ theme }) => theme.btnColor};
  padding-right: 0.5rem;
`;

const FullLabel = styled.label`
  color: black;
  margin: 0 1rem;
  color: ${({ theme }) => theme.fontColor};
`;

const StyledTextInput = styled.input`
  border: none;
  font-size: 1.2rem;
  width: 80%;
  background: transparent;
  color: ${({ theme }) => theme.fontColor};
`;

const Divider = styled.span`
  border-right: 1px solid black;
  border-color: ${({ theme }) => theme.fontColor};
  @media ${mediaQueries.md} {
    border-right: none;
  }
`;

const StyledFormContainer = styled.form`
  border-radius: 10px;
  background-color: ${({ theme }) => theme.formColor};
  width: 80%;
  margin: -2rem auto 0;
  padding: 1em;
  display: grid;
  grid-template-columns: 0.5fr 0.5fr 0.4fr 0.3fr;
  align-items: center;
  gap: 1em;
  @media ${mediaQueries.md} {
    grid-template-columns: 1fr;
  }
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

export default SearchForm;
