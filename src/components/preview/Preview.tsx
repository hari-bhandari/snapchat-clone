import React, {useEffect} from 'react';
import {PreviewContainer,ToolbarRight,Footer} from "./PreviewCSS";
import {useDispatch, useSelector} from "react-redux";
import {selectCameraImage} from "../../features/camera/cameraSlice";
import {useHistory} from "react-router-dom";
import {resetCameraImage} from '../../features/camera/cameraSlice'
//material ui icons
import CloseIcon from '@material-ui/icons/Close'
import TextFieldsIcon from '@material-ui/icons/TextFields';
import CreateIcon from '@material-ui/icons/Create';
import NoteIcon from '@material-ui/icons/Note';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import CropIcon from '@material-ui/icons/Crop';
import TimerIcon from '@material-ui/icons/Timer';
import SendIcon from '@material-ui/icons/Send'
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
            <ToolbarRight>
                <TextFieldsIcon/>
                <CreateIcon/>
                <NoteIcon/>
                <MusicNoteIcon/>
                <AttachFileIcon/>
                <CropIcon/>
                <TimerIcon/>
            </ToolbarRight>
            <img src={cameraImage} alt=""/>
            <Footer>
                <h2>Send Now</h2>
                <SendIcon fontSize={"small"} className="send"/>
            </Footer>
        </PreviewContainer>
    );
};

export default Preview;