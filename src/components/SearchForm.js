import React from "react";
import { BsSearch } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import useInputState from "../hooks/useInputState";
import styled from "styled-components";
import { mediaQueries } from "../styles/theme";

const SearchForm = () => {
  const [nameValue, handleNameChange, resetName] = useInputState("");
  const [locationValue, handleLocationChange, resetLocation] = useInputState(
    ""
  );
  return (
    <StyledFormContainer>
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
        <input type="checkbox" id="checkbox" />
        <FullLabel htmlFor="checkbox">Full Time Only</FullLabel>
      </Divider>
      <StyledBtn>Submit</StyledBtn>
    </StyledFormContainer>
  );
};

const IconLabel = styled.label`
  color: ${({ theme }) => theme.headerColor};
  padding-right: 0.5rem;
`;

const FullLabel = styled.label`
  color: black;
  margin: 0 1rem;
`;

const StyledTextInput = styled.input`
  border: none;
  font-size: 1.2rem;
  width: 80%;
`;

const Divider = styled.span`
  border-right: 1px solid black;
  @media ${mediaQueries.md} {
    border-right: none;
  }
`;

const StyledFormContainer = styled.form`
  border-radius: 10px;
  background-color: white;
  width: 80%;
  margin: 0 auto 0;
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
  color: ${({ theme }) => theme.fontColor};
  background-color: ${({ theme }) => theme.headerColor};
  border: none;
  border-radius: 0.5rem;
  margin-left: 0rem;
  font-size: 16px;
`;

export default SearchForm;
