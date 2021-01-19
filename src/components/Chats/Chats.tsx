import React, {useEffect, useState} from 'react';
import {ChatsContainer, ChatHeader, ChatSearch, ChatPosts} from "./ChatsCss";
import {Avatar} from "@material-ui/core";
import Chat from "./Chat";
//icons
import SearchIcon from "@material-ui/icons/Search"
import ChatBubbleIcon from "@material-ui/icons/ChatBubble"
import {db} from "../../firebase";
interface Post{
    id:string,
    data?:Data
}
interface Data{
    [key: string]: string|object
}
const Chats: React.FC = () => {

    const [posts, setPosts] = useState < Array<Post> > ([])
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
                <Avatar className={"avatar"}/>
                <ChatSearch>
                    <SearchIcon/>
                    <input placeholder="Search friends" type="text"/>
                </ChatSearch>
                <ChatBubbleIcon className={"chatIcon"}/>
            </ChatHeader>
            <ChatPosts>
                {posts.map((post:any)=>(
                    <Chat id={post.id} data={post} />
                ))}

            </ChatPosts>

        </ChatsContainer>
    );
};

export default Chats;