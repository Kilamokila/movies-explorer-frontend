import React from "react";
import AuthMenu from "../AuthMenu/AuthMenu";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import { useLocation } from 'react-router-dom';

function Header({ isTablet, isLoggedIn, handleNavTab}) {

    const location = useLocation();

    return (
        <header className={`Header ${location.pathname === '/' ? 'Header__landing-page-colour' : 'Header__main-page-colour'}`}>
            <div className="Header__menu-container">
                <Logo />
                {isTablet && isLoggedIn &&
                <div className="Header__mobile-menu-button" onClick={handleNavTab}></div>} 
                {!isLoggedIn && <AuthMenu/>}
                {isLoggedIn && !isTablet && <Navigation/>}
            </div>
        </header>
    )
}

export default Header;  