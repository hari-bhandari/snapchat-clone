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
  .avatar{
    width: 25px;
    height: 25px;
  }

`
export const ChatSearch = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  padding-left: 8px;
  input{
    outline: none;
    background-color: transparent;
    border: none;
    font-size: 12px;
    flex: 1;
    color: white;
  }
  input::placeholder{
    color:white;
    opacity: 1;
  }
`
// export const ChatHeader=styled.div`
//
// `
// export const ChatHeader=styled.div`
//
// `