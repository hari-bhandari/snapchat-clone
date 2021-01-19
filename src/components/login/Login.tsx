import React from 'react';
import {LoginContainer,LoginBox} from "./Login.CSS";
import Snapchat from './snapchat-seeklogo.com.svg'
import {Button} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {auth,provider} from "../../firebase";
import {login} from "../../features/counter/appSlice";

const Login = () => {
    const dispatch=useDispatch()
    const signIn=()=>{
        auth.signInWithPopup(provider).then(result => {
            dispatch(login({
                username:result.user?.displayName,
                profilePic:result.user?.photoURL,
                id:result.user?.uid
            }))
        }).catch(error=>alert(error.message))
    }
    return (
        <LoginContainer>
            <LoginBox>
                <img src={Snapchat} alt=""/>
                <Button  onClick={signIn} variant={"outlined"}>Sign in with Google</Button>
            </LoginBox>
        </LoginContainer>
    );
};

export default Login;