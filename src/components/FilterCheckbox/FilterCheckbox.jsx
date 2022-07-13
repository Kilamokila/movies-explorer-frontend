import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/MoviesContext";
import { setItemToStorage } from "../../utils/storage-handlers";

function FilterCheckbox() {

    const {isCheckboxAcive, setIsCheckboxAcive} = useContext(MoviesContext);

    const handleChange = () => {
        setIsCheckboxAcive(!isCheckboxAcive);
        setItemToStorage('isCheckboxAcive', !isCheckboxAcive);
    }

    return(
        <div className="FilterCheckbox">
            <div className="FilterCheckbox__switcher">
                <input className="FilterCheckbox__checkbox" type="checkbox" checked={isCheckboxAcive === true} onChange={handleChange} />
            </div>
            <label className="FilterCheckbox__label">Короткометражки</label>
        </div>

    )
}

export default FilterCheckbox;