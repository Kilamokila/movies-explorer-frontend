import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/MoviesContext";
import { setItemToStorage } from "../../utils/storage-handlers";

function FilterCheckbox({location}) {

    const {isCheckboxAcive, setIsCheckboxAcive, isCheckboxSavedMoviesAcive, setIsCheckboxSavedMoviesAcive,} = useContext(MoviesContext);

    const state = location.pathname === '/movies' ? isCheckboxAcive : isCheckboxSavedMoviesAcive;

    const handleChange = () => {
        if (location.pathname === '/movies') {
            setIsCheckboxAcive(!isCheckboxAcive);
            setItemToStorage('isCheckboxAcive', !isCheckboxAcive);
        }
        else if (location.pathname === '/saved-movies') {
            setIsCheckboxSavedMoviesAcive(!isCheckboxSavedMoviesAcive);
        }
    }

    return(
        <div className="FilterCheckbox">
            <div className="FilterCheckbox__switcher">
                <input className="FilterCheckbox__checkbox" type="checkbox" checked={state === true} onChange={handleChange} />
            </div>
            <label className="FilterCheckbox__label">Короткометражки</label>
        </div>

    )
}

export default FilterCheckbox;