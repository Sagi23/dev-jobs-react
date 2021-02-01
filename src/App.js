import { useEffect, useState } from "react";
import { lightTheme, darkTheme, GlobalStyles } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import SearchForm from "./components/SearchForm";
import Header from "./components/Header";

function App() {
  const [theme, setTheme] = useState("dark");
  const [results, setResults] = useState([]);

  const themeToggler = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  console.log(results);
  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyles />
      <div className="App">
        <Header theme={theme} themeToggler={themeToggler} />
        <SearchForm setResults={setResults} />
      </div>
    </ThemeProvider>
  );
}

export default App;
