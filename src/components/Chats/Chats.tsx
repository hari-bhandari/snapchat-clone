import React, {useEffect, useState} from 'react';
import {ChatContainer, ChatHeader, ChatSearch, ChatPosts} from "./ChatsCss";
import {Avatar} from "@material-ui/core";
//icons
import SearchIcon from "@material-ui/icons/Search"
import ChatBubbleIcon from "@material-ui/icons/ChatBubble"
import {db} from "../../firebase";
interface Post{
    id:string,
    data:Object
}
const Chats: React.FC = () => {

    const [posts, setPosts] = useState < Post[] > ([])
    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc')
            .onSnapshot((snapshot) =>
                setPosts(snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data()
                }))))
    }, [])
    return (
        <ChatContainer>
            <ChatHeader>
                <Avatar className={"avatar"}/>
                <ChatSearch>
                    <SearchIcon/>
                    <input placeholder="Search friends" type="text"/>
                </ChatSearch>
                <ChatBubbleIcon className={"chatIcon"}/>
            </ChatHeader>
            <ChatPosts>

            </ChatPosts>

        </ChatContainer>
    );
};

export default Chats;