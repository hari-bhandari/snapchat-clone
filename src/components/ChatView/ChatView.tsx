import React, {useEffect} from 'react';
import {ChatViewContainer} from "./ChatViewCss";
import {useSelector} from "react-redux";
import {selectSelectedImage} from "../../features/counter/appSlice";
import {useHistory} from "react-router-dom";
import {CountdownCircleTimer} from "react-countdown-circle-timer";
const ChatView = () => {
    const selectedImage=useSelector(selectSelectedImage)
    const history=useHistory()
    useEffect(()=>{
        if(!selectedImage){
            exit()
        }
    },[selectedImage])
    const exit=()=>{
        history.replace('/chats')
    }
    return (
        <ChatViewContainer>
            <img src={selectedImage} alt="image"/>
            <div className="timer">
            <CountdownCircleTimer isPlaying duration={10} colors={[["#004777",0.33],["F7B801",0.33],["#A300000",0.33]]} strokeWidth={6} size={50}>{({remainingTime})=>{
                if(remainingTime===0){
                    exit()
                }
                return remainingTime
            }}</CountdownCircleTimer>
            </div>
        </ChatViewContainer>
    );
};

export default ChatView;