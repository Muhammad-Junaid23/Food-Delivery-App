import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

const Container = styled.div``;

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
     <h1>Welcome to Food delivery App</h1>
    </ThemeProvider>
  );
}

export default App;
