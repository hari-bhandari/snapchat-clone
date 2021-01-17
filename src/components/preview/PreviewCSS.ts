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

