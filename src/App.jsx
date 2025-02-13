import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import theme from "./styles/Theme";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles /> {/* 1. Adicione o GlobalStyles aqui */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <main style={{ minHeight: "100vh" }}>
                {" "}
                <p>Testando</p>
              </main>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
