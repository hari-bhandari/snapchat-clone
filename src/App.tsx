import React, {useEffect} from 'react';
import './App.css';
import {ThemeProvider} from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyle";
import WebcamCapture from "./components/webcam/WebcamCapture";
import {
    BrowserRouter as Router, Switch, Route
} from 'react-router-dom';
import {AppBody, AppContainer} from "./AppCSS";
import Preview from "./components/preview/Preview";
import Chats from "./components/Chats/Chats";
import ChatView from "./components/ChatView/ChatView";
import {useDispatch, useSelector} from "react-redux";
import Login from "./components/login/Login";
import {login, selectUser, logout} from "./features/counter/appSlice";
import {auth} from "./firebase";

function App() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                dispatch(login({
                    username: authUser.displayName,
                    profilePic: authUser.photoURL,
                    id: authUser.uid
                }))
            } else {
                dispatch(logout())
            }
        })
    }, [])
    return (
        <AppContainer>
            <ThemeProvider theme={theme}>
                <GlobalStyles/>
                <Router>
                    {!user ? (<Login/>) :
                        (
                            <AppBody>

                                <Switch>
                                    <Route exact path={'/login'}>

                                    </Route>
                                    <Route exact path="/">
                                        <WebcamCapture/>
                                    </Route>
                                    <Route exact path="/preview">
                                        <Preview/>
                                    </Route>
                                    <Route exact path="/chats/view">
                                        <ChatView/>
                                    </Route>
                                    <Route exact path="/chats">
                                        <Chats/>
                                    </Route>
                                </Switch>
                            </AppBody>)}
                </Router>
            </ThemeProvider>
        </AppContainer>
    );
}

export default App;
