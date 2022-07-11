import React, { useContext } from 'react';
import { MoviesContext } from '../../contexts/MoviesContext';
import { pushDataToStorage } from '../../utils/storage-handlers';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm( {isMobile, location} ) {

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
            fetchSavedMovies
            } = useContext(MoviesContext);

       
    function handleChangeInput(event) {
        setSearchInputValue(event.target.value)
    }

    function filterMovies(movies) {
        let filteredMovies = []
        filteredMovies = movies.filter((movie) => {
           return movie.nameRU.toLowerCase().includes(searchInputValue.toLowerCase())
        });
        return filteredMovies
    }

    function filterShortMovies(filteredMovies) {
        let shortMovies = []
        shortMovies = filteredMovies.filter((movie) => {
           return movie.duration < 40
        });
        return shortMovies
    }
    
    
    async function onSubmit(event) {
        event.preventDefault();
        try {
            if (location.pathname === '/movies') {
                if (allMovies == false) {
                   const movies =  await fetchAllMovies();
                   const filteredMovies = filterMovies(movies);
                   setFilteredMovies(filteredMovies);
                   const shortMovies = filterShortMovies(filteredMovies);
                   setShortMovies(shortMovies);
                   pushDataToStorage(filteredMovies, shortMovies, searchInputValue, isCheckboxAcive);
                }
                else {
                    const filteredMovies = filterMovies(allMovies);
                    setFilteredMovies(filteredMovies);
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
                    {!isMobile && <FilterCheckbox />}
                </form>
                {isMobile && <FilterCheckbox />}
            </div>
        </div>
    )
}

export default SearchForm;