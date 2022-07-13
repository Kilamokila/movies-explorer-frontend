import React from "react";
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";

function Main({ technologies }) {

    return (
        <main className="Main">
            <Promo />
            <AboutProject />
            <Techs technologies={technologies}/>
            <AboutMe />
            <Portfolio />
        </main>
    )
}

export default Main;