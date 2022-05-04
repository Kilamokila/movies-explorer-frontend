import React from "react";
import { NavLink} from "react-router-dom";

function NavTab({ isOpen, handleNavTab }) {
    return(
        <div className={`NavTab ${isOpen && 'NavTab_opened'}`}>
            <nav className="NavTab__content">
                <button className="NavTab__button" type="button" onClick={handleNavTab}></button>
                <div className="NavTab__link-container">
                    <NavLink activeClassName="Navigation__link_active" className="Navigation__link" exact to="/">Главная</NavLink>
                    <NavLink activeClassName="Navigation__link_active" className="Navigation__link" to="/movies">Фильмы</NavLink>
                    <NavLink activeClassName="Navigation__link_active" className="Navigation__link" exact to="/saved-movies">Сохранённые фильмы</NavLink>
                    <div className="Navigation__account-container NavTab__account-container">
                        <div className="Navigation__account-icon"></div>
                        <NavLink activeClassName="Navigation__link_active" className="Navigation__link" to="/profile">Аккаунт</NavLink>
                    </div>
                </div>

            </nav>
        </div>
    )
}

export default NavTab;