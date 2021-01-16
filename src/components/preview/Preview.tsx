import React from 'react';
import {PreviewContainer} from "./PreviewCSS";
import {useSelector} from "react-redux";
import {selectCameraImage} from "../../features/camera/cameraSlice";

const Preview:React.FC = () => {
    const cameraImage=useSelector(selectCameraImage)
    return (
        <PreviewContainer>
            <img src={cameraImage} alt=""/>
        </PreviewContainer>
    );
};

export default Preview;