import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import NavTab from "../NavTab/NavTab";
import SearchForm from "../SearchForm/SearchForm";

function SavedMovies( {isMobile, isTablet, isLoggedIn, isOpen, handleOpenNavTab, handleCloseNavTab} ) {
    return(
        <>
        <Header isTablet={isTablet} isLoggedIn={isLoggedIn} handleOpenNavTab={handleOpenNavTab}/>
        <main className="Movies">
            <SearchForm isMobile={isMobile}/>
            <MoviesCardList />
            { isTablet && <NavTab isOpen={isOpen} handleCloseNavTab={handleCloseNavTab}/> }
        </main>
        <Footer/>
        </>
    )
}

export default SavedMovies;