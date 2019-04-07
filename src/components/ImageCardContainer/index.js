import React from "react";
import "./style.css";

function ImageCardContainer(props) {
    return <div className="card-container grid-container">{props.children}</div>
}

export default ImageCardContainer;