import React from "react";

function CheckedButton({ handleClick }) {
    return(
        <button className="CheckedButton" type="button" onClick={handleClick}></button>
    )
}

export default CheckedButton;