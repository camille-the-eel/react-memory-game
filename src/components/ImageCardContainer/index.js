import React from "react";
import "./style.css";

function ImageCardContainer(props) {
    return (
    <div class="center">
        <div className="card-container grid-container">
            {props.children}
        </div>
    </div>
    )
}

export default ImageCardContainer;