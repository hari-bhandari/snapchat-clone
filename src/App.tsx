import React from 'react';
import './App.css';
import {ThemeProvider} from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyle";
import WebcamCapture from "./components/webcam/WebcamCapture";
function App() {
  return (
      <ThemeProvider theme={theme}>
          <GlobalStyles/>
        <WebcamCapture/>
      </ThemeProvider>
  );
}

export default App;
