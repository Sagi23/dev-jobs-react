import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#ffffff",
  fontColor: "#313131",
  headerColor: "#34729d",
  descriptionColor: "#ffffff",
};

export const darkTheme = {
  body: "#171f24",
  fontColor: "#e0e0e0",
  headerColor: "#449ddb",
  descriptionColor: "#1b2a35",
};

export const mediaQueries = {
  md: `(max-width: 900px)`,
  lg: `(min-width: 900px)`,
  mid: `(max-width: 1599px)`,
};

export const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');html,
body {
  font-size: 16px;
  padding: 0;
  margin: 0;
font-family: 'Roboto', sans-serif;
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.fontColor};
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
   scroll-behavior: smooth;
}
`;
