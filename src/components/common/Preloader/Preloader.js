import preloader from "../../../assets/image/loading-86.webp";
import React from "react";

const Preloader = () => {
    return (
        <div className={"preloader"}>
            <img src={preloader} alt="Preloader"/>
        </div>
    )
}

export default Preloader;