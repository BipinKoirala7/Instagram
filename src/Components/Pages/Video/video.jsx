import React from "react";

function Video(){
    return (
    <div className="relative h-[100%] overflow-y-scroll hide-scrollbar">
        <video loop autoPlay controls={true} className="absolute z-[-1] h-[100%] w-[100%]">
            <source src="../shorts.mp4" type="video/mp4" />
        </video>
        <span className="material-symbols-outlined">photo_camera</span>
        <p>Bipin koirala</p>
    </div>
    );
}

export default Video