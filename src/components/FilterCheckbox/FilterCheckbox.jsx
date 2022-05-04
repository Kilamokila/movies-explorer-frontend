import React from "react";

function FilterCheckbox() {
    return(
        <div className="FilterCheckbox">
            <div className="FilterCheckbox__switcher">
                <input className="FilterCheckbox__checkbox" type="checkbox" />
            </div>
            <label className="FilterCheckbox__label">Короткометражки</label>
        </div>

    )
}

export default FilterCheckbox;