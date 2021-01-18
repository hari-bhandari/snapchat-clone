import styled from "styled-components";

export const ChatContainer = styled.div`
  position: relative;
  height: 400px;
  width: 250px;

`
export const ChatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  background-color: #059ee0;
  height: 50px;

  .avatar {
    width: 25px;
    height: 25px;
  }

`
export const ChatSearch = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  padding-left: 8px;

  input {
    outline: none;
    background-color: transparent;
    border: none;
    font-size: 12px;
    flex: 1;
    color: white;
  }

  input::placeholder {
    color: white;
    opacity: 1;
  }
`
export const ChatPosts = styled.div`
  box-shadow: 1px -7px 7px -6px rgba(0,0,0,0.44);
  height: 359px;
  margin-top: -9px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: white;
  overflow: scroll;
  &::-webkit-scrollbar{
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width:none;

`
// export const ChatHeader=styled.div`
//
// `