import React from "react";
import Header from "../Header/Header";
import NavTab from "../NavTab/NavTab";
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import Footer from "../Footer/Footer";

function Main({ technologies, isNavTabOpen, handleNavTab, isTablet, isLoggedIn }) {

    return (
        <main className="Main">
            <Header isTablet={isTablet} isLoggedIn={isLoggedIn} handleNavTab={handleNavTab}/>
            { isTablet && <NavTab isOpen={isNavTabOpen} handleNavTab={handleNavTab}/>}
            <Promo />
            <AboutProject />
            <Techs technologies={technologies}/>
            <AboutMe />
            <Portfolio />
            <Footer />
        </main>
    )
}

export default Main;