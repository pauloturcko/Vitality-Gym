import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import theme from "./styles/Theme";
import { ThemeProvider } from "styled-components";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <p>Welcome to Vitality Gym Website!</p>
    </ThemeProvider>
  );
};

export default App;
