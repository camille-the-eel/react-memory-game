import React from "react";
import "./style.css";

function ImageCard(props) {
    // <div onClick={} className="img-container clicked">
    return (
        <div className="card">
            <div className="img-container clicked">
                <img alt={props.name} src={`./images/${props.image}`} />
            </div>
        </div>
    );
}



export default ImageCard;