import React, { useContext, useEffect, useState } from 'react';
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import NavTab from "../NavTab/NavTab";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from '../Preloader/Preloader';
import { MoviesContext } from '../../contexts/MoviesContext';
import { useLocation } from 'react-router-dom';
import { grabFromStorage } from '../../utils/storage-handlers';

function Movies({ isMobile, isTablet, isOpen, handleNavTab, isLoggedIn }) {
    
    const [isNothingFound, setIsNothingFound] = useState();

    const location = useLocation();

    const { isCheckboxAcive, 
            sliceMovies,
            shortMovies,
            filteredMovies,
            preloaderState,
            setFilteredMovies,
            setShortMovies, 
            setSearchInputValue,
            setIsCheckboxAcive,
            moviesToRender,
            showMore } = useContext(MoviesContext);

    const slicedFilteredMovies = sliceMovies(filteredMovies);
    const slicedShortMovies = sliceMovies(shortMovies);

    const doNotNeedMore = isCheckboxAcive ? (shortMovies.length <= moviesToRender) : (filteredMovies.length <= moviesToRender)

    const renderResults = () => {
        if (!!filteredMovies.length) {
            return (<MoviesCardList slicedMovies={isCheckboxAcive ? slicedShortMovies : slicedFilteredMovies}/>);
        } else if (isNothingFound) {
            return (<p className="Movies__error-title">По Вашему запросу ничего не найдено</p>);
        }
          else return
    }

    useEffect(() => {
        const renderData = grabFromStorage('filteredMovies', 'shortMovies', 'requestField', 'isCheckboxAcive');
        setFilteredMovies(renderData.filteredMovies);
        setShortMovies(renderData.shortMovies);
        setSearchInputValue(renderData.requestField);
        setIsCheckboxAcive(renderData.savedFilter);
        }, [setFilteredMovies, setShortMovies, setSearchInputValue, setIsCheckboxAcive])

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
                setIsNothingFound={setIsNothingFound}
            />
            {preloaderState ? <Preloader/> : renderResults()}
            <div className="Movies__more-films-container">
                <button 
                    type="button" 
                    className={`${doNotNeedMore ?  'Movies__more-films-button_disabled' : 'Movies__more-films-button' }`} 
                    onClick={showMore}>Ещё
                </button>
            </div>
            { isTablet && <NavTab isOpen={isOpen} handleNavTab={handleNavTab}/>}
        </main>
        <Footer/>
        </>
    )
}

export default Movies;