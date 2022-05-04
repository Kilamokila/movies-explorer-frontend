import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import NavTab from "../NavTab/NavTab";
import SearchForm from "../SearchForm/SearchForm";


function Movies( {isMobile, isTablet, isOpen, handleOpenNavTab, handleCloseNavTab, isLoggedIn} ) {
    return(
        <>
        <Header isTablet={isTablet} isLoggedIn={isLoggedIn} handleOpenNavTab={handleOpenNavTab}/>
        <main className="Movies">
            <SearchForm isMobile={isMobile}/>
            <MoviesCardList />
            <div className="Movies__more-films-container">
                <button type="button" className="Movies__more-films-button">Ещё</button>
            </div>
            { isTablet && <NavTab isOpen={isOpen} handleCloseNavTab={handleCloseNavTab}/>}
        </main>
        <Footer/>
        </>
    )
}

export default Movies;