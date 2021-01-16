import React, {useEffect} from 'react';
import {PreviewContainer} from "./PreviewCSS";
import {useSelector} from "react-redux";
import {selectCameraImage} from "../../features/camera/cameraSlice";
import {useHistory} from "react-router-dom";

const Preview:React.FC = () => {
    const cameraImage=useSelector(selectCameraImage)
    const history=useHistory()
    useEffect(()=>{
        if(cameraImage===''){
            history.push('/')
        }
    },[])
    return (
        <PreviewContainer>
            <img src={cameraImage} alt=""/>
        </PreviewContainer>
    );
};

export default Preview;