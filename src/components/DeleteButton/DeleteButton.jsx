import React from "react";

function DeleteButton() {
    const [isDeleteButtonActive, setIsDeleteButtonActive] = React.useState(false);
    
    return(
        <button className="DeleteButton" type="button"></button>
    )
}

export default DeleteButton;