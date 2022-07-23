import React, { useContext } from 'react';
import { MoviesContext } from '../../contexts/MoviesContext';
import { pushDataToStorage } from '../../utils/storage-handlers';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm( {isMobile, location, setIsNothingFound} ) {

    const { isCheckboxAcive, 
            searchInputValue,
            setSearchInputValue,
            setFilteredMovies,
            setShortMovies,
            setSavedFilteredMovies,
            setSavedShortMovies,
            allMovies,
            savedMovies,
            fetchAllMovies,
            fetchSavedMovies,
            filterMovies,
            filterShortMovies
            } = useContext(MoviesContext);

       
    function handleChangeInput(event) {
        setSearchInputValue(event.target.value)
    }
     
    
    async function onSubmit(event) {
        event.preventDefault();
        try {
            if (location.pathname === '/movies') {
                if (allMovies == false) {
                   const movies =  await fetchAllMovies();
                   const filteredMovies = filterMovies(movies);
                   setFilteredMovies(filteredMovies);
                   filteredMovies.length === 0 ? setIsNothingFound(true) : setIsNothingFound(false);
                   const shortMovies = filterShortMovies(filteredMovies);
                   setShortMovies(shortMovies);
                   pushDataToStorage(filteredMovies, shortMovies, searchInputValue, isCheckboxAcive);
                }
                else {
                    const filteredMovies = filterMovies(allMovies);
                    setFilteredMovies(filteredMovies);
                    filteredMovies.length === 0 ? setIsNothingFound(true) : setIsNothingFound(false);
                    const shortMovies = filterShortMovies(filteredMovies);
                    setShortMovies(shortMovies);
                    pushDataToStorage(filteredMovies, shortMovies, searchInputValue, isCheckboxAcive);
                }
            }
            else {
                if (savedMovies == false) {
                    const fetchedSavedMovies = await fetchSavedMovies();
                    const filteredSavedMovies = filterMovies(fetchedSavedMovies);
                    setSavedFilteredMovies(filteredSavedMovies);
                    const filteredShortMovies = filterShortMovies(filteredSavedMovies);
                    setSavedShortMovies(filteredShortMovies);
                }
                else {
                    const filteredSavedMovies = filterMovies(savedMovies);
                    setSavedFilteredMovies(filteredSavedMovies);
                    const filteredShortMovies = filterShortMovies(filteredSavedMovies);
                    setSavedShortMovies(filteredShortMovies);
                }
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    return(
        <div className="SearchForm">
            <div className="SearchForm__content">
                <form className="SearchForm__form" action="#" method="GET" name="movies-search-form" onSubmit={onSubmit}>
                    <div className="SearchForm__container">
                        <fieldset className="SearchForm__fieldset">
                            {!isMobile && <div className="SearchForm__icon"></div>}
                            <input 
                                className="SearchForm__input" 
                                type="search" 
                                name="search-form-field" 
                                required placeholder="Фильм"
                                value={searchInputValue}
                                onChange={handleChangeInput}/>
                            <button className="SearchForm__button" type="submit" name="search-form-button" action="#"></button>
                        </fieldset>
                    </div>
                    {!isMobile && <FilterCheckbox location={location}/>}
                </form>
                {isMobile && <FilterCheckbox location={location}/>}
            </div>
        </div>
    )
}

export default SearchForm;