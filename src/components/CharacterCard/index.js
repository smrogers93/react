import React from "react";
import "./style.css";

function CharacterCard(props) {
    return (
            <div>
                <img onClick={() => props.shuffle()} className="remove" className="img-thumbnail" style={{width: "250px", height: "250px"}} alt={props.name} src={props.image} />
            </div>
    );
}

export default CharacterCard;