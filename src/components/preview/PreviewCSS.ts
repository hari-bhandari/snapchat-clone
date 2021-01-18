import styled from "styled-components";
export const PreviewContainer=styled.div`
  position: relative;
  .close{
    position: absolute;
    top: 0;
    margin: 5px;
    cursor: pointer;
    color: white;
  }
  
`
export const ToolbarRight=styled.div`
    color: white;
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: column;
  margin: 5px;
  .MuiSvgIcon-root{
    font-size:20px!important; 
    margin-bottom: 8px;
    cursor: pointer;
  }
`
export const Footer=styled.div`
  position: absolute;
  bottom: 0;
  right: -25px;
  transform: translate(-50%,-50%);
  background-color: yellow;
  color: black;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 30px;
  padding: 7px;
  cursor: pointer;
  h2{
    font-size: 8px;
    margin-right: 3px;
  }
  .send{
    font-size: 10px!important;
  }
`

