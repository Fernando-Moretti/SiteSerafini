import React from "react";
import './index.css';
import './App.css';
import BackVideo from './images/BackVideo.mp4';

const ContentSection = () => {
    return (
        <div className="main-content">
            <div className="h-screen flex items-center justify-center">
                <div className="text">
                    <p>SERAFINI "READY-TO-WEAR"</p>
                </div>
                <div className="video">
                    <video className='VideoTag' autoPlay loop muted>
                        <source src={BackVideo} type='video/mp4' />
                    </video>
                </div>
            </div>
        </div>
    );
};

export default ContentSection;
