import { useState } from "react";
import { lightTheme, darkTheme, GlobalStyles } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import SearchForm from "./components/SearchForm";

function App() {
  const [theme, setTheme] = useState("dark");

  const themeToggler = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyles />
      <div className="App">
        <SearchForm />
      </div>
    </ThemeProvider>
  );
}

export default App;
