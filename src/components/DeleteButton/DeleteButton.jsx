import React from "react";

function DeleteButton({ handleRemove }) {
    return(
        <button className="DeleteButton" type="button" onClick={handleRemove}></button>
    )
}

export default DeleteButton;