import React from 'react'
import './homeStyles.css'
import { WebcamCapture} from './Webcam'


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