import React, {useCallback, useRef, useState} from 'react';
import Webcam from "react-webcam";
import {WebcamCaptureContainer} from "./WebcamCaptureCss";
import RadioButtonUnChecked from '@material-ui/icons/RadioButtonUnchecked'
interface VideoConstraints {
    width: number,
    height: number,
    facingMode: "user"|"back",
    audio:boolean,
    screenShotImageFormat:"image/jpeg" | "image/webp" | "image/png" | undefined
}
const videoConstraints: VideoConstraints = {
    width: 250,
    height: 400,
    facingMode: 'user',
    audio:false,
    screenShotImageFormat:"image/jpeg"
}

const WebcamCapture:React.FC = () => {
    const {width,height,audio,screenShotImageFormat} =videoConstraints
    const [image,setImage]=useState<string>()
    const webCamRef=useRef(null)
    const capture=useCallback(()=>{
        // @ts-ignore
        const imageSrc=webCamRef.current.getScreenshot();
        setImage(imageSrc)
    },[webCamRef])
    return (
        <WebcamCaptureContainer>
        <Webcam audio={audio} width={width} height={height} ref={webCamRef} screenshotFormat={screenShotImageFormat} videoConstraints={videoConstraints}/>
        <RadioButtonUnChecked className="webcamCapture__button" onClick={capture} fontSize={"large"}/>
            <img src={image} alt=""/>
        </WebcamCaptureContainer>
    );
};

export default WebcamCapture;