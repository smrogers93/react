import React from "react";
import "./style.css";

function CharacterCard(props) {
    return (
            <div className="">
                <img onClick={() => props.removeCharacter(props.id)} className="remove" className="img-thumbnail" alt={props.name} src={props.image} />
            </div>
    );
}

export default CharacterCard;