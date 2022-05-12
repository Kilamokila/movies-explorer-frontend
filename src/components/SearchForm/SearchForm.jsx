import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm( {isMobile} ) {
    return(
        <div className="SearchForm">
            <div className="SearchForm__content">
                <form className="SearchForm__form" action="#" method="GET" name="movies-search-form">
                    <div className="SearchForm__container">
                        <fieldset className="SearchForm__fieldset">
                            {!isMobile && <div className="SearchForm__icon"></div>}
                            <input className="SearchForm__input" type="search" name="search-form-field" required placeholder="Фильм"/>
                            <input className="SearchForm__button" type="submit" name="search-form-button" action="#" value=""/>
                        </fieldset>
                    </div>
                    {!isMobile && <FilterCheckbox />}
                </form>
                {isMobile && <FilterCheckbox />}
            </div>
        </div>
    )
}

export default SearchForm;