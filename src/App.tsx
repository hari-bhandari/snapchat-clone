import React from 'react';
import './App.css';
import {ThemeProvider} from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyle";
import WebcamCapture from "./components/webcam/WebcamCapture";
import {
    BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {AppBody,AppContainer} from "./AppCSS";
import Preview from "./components/preview/Preview";
import Chats from "./components/Chats/Chats";

function App() {
    return (
        <AppContainer>
        <ThemeProvider theme={theme}>
            <GlobalStyles/>
            <Router>
                <AppBody>
            <Switch>
                <Route exact path="/">
                    <WebcamCapture/>
                </Route>
                <Route exact path="/preview">
                    <Preview/>
                </Route>
                <Route exact path="/chats">
                    <Chats/>
                </Route>
            </Switch>
                </AppBody>
    </Router>
</ThemeProvider>
        </AppContainer>
);
}

export default App;
