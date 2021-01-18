import React from 'react';
import {ChatContainer,ChatHeader,ChatSearch} from "./ChatsCss";
import {Avatar} from "@material-ui/core";
//icons
import SearchIcon from "@material-ui/icons/Search"
import ChatBubbleIcon from "@material-ui/icons/ChatBubble"
const Chats:React.FC = () => {
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

        </ChatContainer>
    );
};

export default Chats;