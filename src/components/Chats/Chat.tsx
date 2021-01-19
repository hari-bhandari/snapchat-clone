import React from 'react';
import {ChatContainer,ChatInfo} from "./ChatsCss";
import {Avatar} from "@material-ui/core";
import {StopRounded} from "@material-ui/icons";
import ReactTimeago from 'react-timeago'
import {useDispatch} from "react-redux";

interface DataProps{
    id:String,
    data:any
}
const Chat:React.FC<DataProps> = ({data:{id,data:{profilePic,username,timestamp,imageUrl,read}}}) => {
    const open=()=>{
        // if(!read){
        //     dispatch(selectImage)
        // }
    }
    return (
        <ChatContainer onClick={open}>
            <Avatar className={"avatar"} src={profilePic}/>
            <ChatInfo>
                <h4>{username}</h4>
                <p>tap to view - <ReactTimeago date={new Date(timestamp?.toDate()).toUTCString()}/></p>
            </ChatInfo>
            {!read&&<StopRounded className={"read"}/>}
        </ChatContainer>
    );
};

export default Chat;