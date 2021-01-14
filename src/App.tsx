import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import {ThemeProvider} from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyle";
function App() {
  return (
      <ThemeProvider theme={theme}>
          <GlobalStyles/>
      <h1>Har</h1>
      </ThemeProvider>
  );
}

export default App;
