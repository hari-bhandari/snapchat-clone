import React, {useEffect} from 'react';
import {PreviewContainer} from "./PreviewCSS";
import {useDispatch, useSelector} from "react-redux";
import {selectCameraImage} from "../../features/camera/cameraSlice";
import {useHistory} from "react-router-dom";
import CloseIcon from '@material-ui/icons/Close'
import {resetCameraImage} from '../../features/camera/cameraSlice'
const Preview:React.FC = () => {
    const dispatch=useDispatch()
    const cameraImage=useSelector(selectCameraImage)
    const history=useHistory()
    useEffect(()=>{
        if(cameraImage===''){
            history.replace('/')
        }
    },[cameraImage,history])
    const closePreview=()=>{
        dispatch(resetCameraImage())
    }
    return (
        <PreviewContainer>
            <CloseIcon className={'close'} onClick={closePreview}/>
            <img src={cameraImage} alt=""/>
        </PreviewContainer>
    );
};

export default Preview;