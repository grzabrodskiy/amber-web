import React, { useState } from 'react';
//import React from 'react'
import './homeStyles.css'
//import { WebcamCapture} from './Webcam'

//import React, { useState } from 'react';
import Webcam from "react-webcam";


//const WebcamComponent = () => <Webcam />;

const videoConstraints = {
    width: 3840,
    height: 2160,
    facingMode: "environment"
};
 
export const WebcamCapture = () => {

    const [imageSource,setImageSource]=useState('');


    const [ imageHeight, setImageHeight ] = useState(null);
    const [ imageWidth, setImageWidth ]   = useState(null);   

    const webcamRef = React.useRef(null);

    const capture = React.useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot({width:3840, height:2160});
            setImageSource(imageSrc)
        }, []);
    

    const imgRef = React.createRef();
    
    return (
        <div className="webcam-container">
            <div>
                {imageSource !== '' ?
                    <button onClick={(e) => {
                            e.preventDefault();
                            setImageSource('')
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

            <div className="webcam-img" >
                <Webcam
                    audio={false}
                    height={216}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    width={384}
                    videoConstraints={videoConstraints}
                    screenshotQuality={1}
                />
               
            </div>
            <div className='imgBox'>
                {imageSource !== '' && 
                <div>
                    <img 
                        className="my-img" 
                        src={imageSource} 
                        alt='should be something'
                        ref={imgRef}
                        onLoad={() =>{ setImageHeight(imgRef.current.naturalHeight); 
                            setImageWidth(imgRef.current.naturalWidth); 
                        }}
                    /> 
                    { imageWidth &&
                    <div 
                        className="image_dimensions">
                        Image size: {imageWidth} x {imageHeight}
                    </div>
                    }
                </div>
                }
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