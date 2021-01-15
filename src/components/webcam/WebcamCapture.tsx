import React, {useRef} from 'react';
import Webcam, {WebcamProps} from "react-webcam";
import {WebcamCaptureContainer} from "./WebcamCaptureCss";

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

const WebcamCapture = () => {
    const {width,height,facingMode,audio,screenShotImageFormat} =videoConstraints
    const webCamRef=useRef(null)
    return (
        <WebcamCaptureContainer>
        <Webcam audio={audio} width={width} height={height} ref={webCamRef} screenshotFormat={screenShotImageFormat} videoConstraints={videoConstraints}/>
        </WebcamCaptureContainer>
    );
};

export default WebcamCapture;