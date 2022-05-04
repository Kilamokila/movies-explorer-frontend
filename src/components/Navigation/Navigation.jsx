import React from "react";
import { NavLink} from "react-router-dom";

function Navigation() {
    return(
        <nav className="Navigation__content">
            <NavLink activeClassName="Navigation__link_active" className="Navigation__link" to="/movies">Фильмы</NavLink>
            <NavLink activeClassName="Navigation__link-to-savedfilms_active" className="Navigation__link-to-savedfilms" exact to="/saved-movies">Сохранённые фильмы</NavLink>
            <div className="Navigation__account-container">
                <div className="Navigation__account-icon"></div>
                <NavLink activeClassName="Navigation__link_active" className="Navigation__link" to="/profile">Аккаунт</NavLink>
            </div>
        </nav>
    )
}

export default Navigation;