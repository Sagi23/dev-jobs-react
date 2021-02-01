import React from "react";
import styled from "styled-components";
import { BsSun, BsMoon } from "react-icons/bs";
import bg from "../styles/bg-pattern-header.svg";

const Header = ({ theme, themeToggler }) => {
  return (
    <>
      <Container>
        <StyledDiv>
          <h1 style={{ color: "white" }}>DevJobs</h1>
          <div
            onClick={() => themeToggler()}
            style={{ fontSize: "40px", cursor: "pointer" }}
          >
            {theme === "dark" ? <BsSun /> : <BsMoon />}
          </div>
        </StyledDiv>
      </Container>
    </>
  );
};

const Container = styled.div`
  padding: 5rem 0;
  background-image: url(${bg});
  background-size: 100%;
`;

const StyledDiv = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Header;
