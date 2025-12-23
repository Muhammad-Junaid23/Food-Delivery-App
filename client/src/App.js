import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import Navbar from './components/Navbar'
import Home from './pages/Home'
import {lightTheme} from './utils/Themes'

const Container = styled.div``;

function App() {
  return (
     <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
      <Container>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home/>} />
        </Routes>
      </Container>
      </BrowserRouter>
     </ThemeProvider>
  );
}

export default App;
