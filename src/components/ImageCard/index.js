import React from "react";
import "./style.css";

function ImageCard(props) {
    return (
        <div className="card clicked" onClick={() => props.handleClick(props.id, props.picked)}>
            <div className="img-container">
                <img alt={props.name} src={`./images/${props.image}`} />
            </div>
        </div>
    );
}



export default ImageCard;