import React from 'react';
import './App.css';
import {ThemeProvider} from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyle";
import WebcamCapture from "./components/webcam/WebcamCapture";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import {AppBody} from "./AppCSS";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles/>
            <Router>
                <AppBody>
            <Switch>
                <Route path="/">
                    <WebcamCapture/>
                </Route>
            </Switch>
                </AppBody>
    </Router>
</ThemeProvider>
);
}

export default App;
