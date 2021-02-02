import { useState } from "react";
import { lightTheme, darkTheme, GlobalStyles } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import SearchForm from "./components/SearchForm";
import Header from "./components/Header";
import CardList from "./components/CardList";
import useJobsData from "./hooks/useJobsData";
import useInputState from "./hooks/useInputState";

function App() {
  const [theme, setTheme] = useState("dark");
  const [nameValue, handleNameChange] = useInputState("");
  const [locationValue, handleLocationChange] = useInputState("");
  const [fullTime, setFullTime] = useState(false);

  const {
    getData,
    isLoading,
    results,
    pageNum,
    setPageNum,
    setResults,
  } = useJobsData();

  const themeToggler = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyles />
      <>
        <Header theme={theme} themeToggler={themeToggler} />
        <SearchForm
          getData={getData}
          isLoading={isLoading}
          nameValue={nameValue}
          handleNameChange={handleNameChange}
          locationValue={locationValue}
          handleLocationChange={handleLocationChange}
          fullTime={fullTime}
          setFullTime={setFullTime}
          page={pageNum}
          setPageNum={setPageNum}
          setResults={setResults}
        />
        <CardList
          results={results}
          getData={getData}
          isLoading={isLoading}
          nameValue={nameValue}
          locationValue={locationValue}
          fullTime={fullTime}
          page={pageNum}
          setPageNum={setPageNum}
        />
      </>
    </ThemeProvider>
  );
}

export default App;
