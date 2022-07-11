import React from "react";

function SaveButton({ handleClick }) {

    return(
        <button className="SaveButton" type="button" onClick={handleClick}>Сохранить</button>
    )
}

export default SaveButton;