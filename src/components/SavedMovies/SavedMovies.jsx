import React, { useContext, useEffect } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import NavTab from "../NavTab/NavTab";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from '../Preloader/Preloader';
import { MoviesContext } from '../../contexts/MoviesContext';
import { useLocation } from 'react-router-dom';

function SavedMovies( {isMobile, isTablet, isLoggedIn, isOpen, handleNavTab} ) {

    const location = useLocation();

    const { isCheckboxSavedMoviesAcive, 
        savedShortMovies,
        savedFilteredMovies,
        preloaderState,
        filterShortMovies,
        setSavedShortMovies,
        savedMovies,                                                                     
             } = useContext(MoviesContext);

        useEffect(() => {
            const initialShortMoviesToFilter = filterShortMovies(savedMovies);
            setSavedShortMovies(initialShortMoviesToFilter);
                }, [])

        const slicedFilteredMovies = () => {
            return savedFilteredMovies.length === 0 ? savedMovies : savedFilteredMovies;
        }
       
    return(
        <>
        <Header 
            isTablet={isTablet} 
            isLoggedIn={isLoggedIn}
            handleNavTab={handleNavTab}/>
        <main className="Movies">
            <SearchForm 
                isMobile={isMobile}
                location={location}
            />
            {preloaderState ? <Preloader/> : <MoviesCardList slicedMovies={isCheckboxSavedMoviesAcive ? savedShortMovies : slicedFilteredMovies()}/>}
            { isTablet && <NavTab isOpen={isOpen} handleNavTab={handleNavTab}/>}
        </main>
        <Footer/>
        </>
    )
}

export default SavedMovies;