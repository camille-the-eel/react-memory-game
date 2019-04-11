import React from "react";
import "./style.css";

function ImageCard(props) {
    return (
      <div className="card clicked" onClick={() => props.onClick(props.id, props.clicked)}>
            <div className="img-container">
                <img alt={props.name} src={`./images/${props.image}`} />
            </div>
        </div>
    );
}



export default ImageCard;