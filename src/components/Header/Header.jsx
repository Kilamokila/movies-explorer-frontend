import React from "react";
import AuthMenu from "../AuthMenu/AuthMenu";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";

function Header({ isTablet, isLoggedIn, handleNavTab}) {
    return (
        <header className={`Header ${isLoggedIn && 'Header__for-logged-in'}`}>
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