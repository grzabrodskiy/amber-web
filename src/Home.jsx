import React, { useState } from 'react';
//import React from 'react'
import './homeStyles.css'
//import { WebcamCapture} from './Webcam'

//import React, { useState } from 'react';
import Webcam from "react-webcam";


//const WebcamComponent = () => <Webcam />;

const videoConstraints = {
    width: 384,
    height: 216,
    facingMode: "environment"
};
 




export const WebcamCapture = () => {

    const [image,setImage]=useState('');
    const webcamRef = React.useRef(null);

    
    const capture = React.useCallback(
        () => {
        const imageSrc = webcamRef.current.getScreenshot({width:3840, height:2160});
        setImage(imageSrc)
        });
    
    
    
    return (
        <div className="webcam-container">
            <div>
                {image !== '' ?
                    <button onClick={(e) => {
                        e.preventDefault();
                        setImage('')
                    }}
                        className="webcam-btn">
                        Retake Image</button> :
                    <button onClick={(e) => {
                        e.preventDefault();
                        capture();
                    }}
                        className="webcam-btn">Capture</button>
                }
            </div>

            <div className="webcam-img">
                <Webcam
                    audio={false}
                    height={216}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    width={384}
                    videoConstraints={videoConstraints}
                    screenshotQuality={1}
                    facingMode="environment"
                />
               
            </div>
            <div className="webcam-img">
                {image === '' ? "" : <img src={image} height={108} width={192} alt='should be something' />}
            </div>
            
        </div>
    );
};


const Home = () => {

    return (
        <div className="home-container">
       
                <div className="text">
                        <WebcamCapture/>
                        
                </div>

        </div>
    )
}

export default Home