import React from "react";
import "./style.css";

function ImageCardContainer(props) {
    return (
    <div className="center">
        <div className="card-container grid-container">
            {props.children}
        </div>
    </div>
    )
}

export default ImageCardContainer;