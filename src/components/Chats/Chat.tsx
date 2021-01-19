import React from 'react';
import {ChatContainer, ChatInfo} from "./ChatsCss";
import {Avatar} from "@material-ui/core";
import {StopRounded} from "@material-ui/icons";
import ReactTimeago from 'react-timeago'
import {useDispatch} from "react-redux";
import {selectImage} from "../../features/counter/appSlice";
import {db} from "../../firebase";
import {useHistory} from "react-router-dom";

interface DataProps {
    id: String,
    data: any
}

const Chat: React.FC<DataProps> = ({data: {id, data: {profilePic, username, timestamp, imageUrl, read}}}) => {
    const dispatch = useDispatch()
    const history=useHistory()
    const open = () => {
        if (!read) {
            dispatch(selectImage(imageUrl))
            db.collection('posts').doc(id).set({read: true}, {merge: true })
            history.push('/chats/view')
        }
    }
    return (
        <ChatContainer onClick={open}>
            <Avatar className={"avatar"} src={profilePic}/>
            <ChatInfo>
                <h4>{username}</h4>
                <p>{!read&&"tap to view - "}{" "}<ReactTimeago date={new Date(timestamp?.toDate()).toUTCString()}/></p>
            </ChatInfo>
            {!read && <StopRounded className={"read"}/>}
        </ChatContainer>
    );
};

export default Chat;