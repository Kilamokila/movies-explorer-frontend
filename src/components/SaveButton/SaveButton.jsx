import React from "react";

function SaveButton() {

    const [isSaveButtonActive, setIsSaveButtonActive] = React.useState(false);

    return(
        <button className="SaveButton" type="button">Сохранить</button>
    )
}

export default SaveButton;