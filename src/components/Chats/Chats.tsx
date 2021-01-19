import React, {useEffect, useState} from 'react';
import {ChatsContainer, ChatHeader, ChatSearch, ChatPosts} from "./ChatsCss";
import {Avatar} from "@material-ui/core";
import Chat from "./Chat";
//icons
import SearchIcon from "@material-ui/icons/Search"
import ChatBubbleIcon from "@material-ui/icons/ChatBubble"
import {auth, db} from "../../firebase";
import {useDispatch, useSelector} from "react-redux";
import {selectUser} from "../../features/counter/appSlice";
import {RadioButtonUnchecked} from "@material-ui/icons";
import {useHistory} from "react-router-dom";
interface Post{
    id:string,
    data?:Data
}
interface Data{
    [key: string]: string|object
}
const Chats: React.FC = () => {
    const user=useSelector(selectUser)
    const dispatch=useDispatch()
    const history=useHistory()
    const [posts, setPosts] = useState < Array<Post> > ([])
    const takeSnap=()=>{
        history.push('/')
    }
    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc')
            .onSnapshot((snapshot) =>
                setPosts(snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data()
                }))))
    }, [])
    return (
        <ChatsContainer>
            <ChatHeader>
                <Avatar className={"avatar"} src={user?.profilePic} onClick={()=>auth.signOut()}/>
                <ChatSearch>
                    <SearchIcon className={"search"}/>
                    <input placeholder="Search friends" type="text"/>
                </ChatSearch>
                <ChatBubbleIcon className={"chatIcon"}/>
            </ChatHeader>
            <ChatPosts>
                {posts.map((post:any)=>(
                    <Chat id={post.id} data={post} />
                ))}

            </ChatPosts>
            <RadioButtonUnchecked className="takePicIcon" onClick={takeSnap} />

        </ChatsContainer>
    );
};

export default Chats;