import React from "react";
import { Link } from "react-router-dom";

function AuthMenu() {
    return(
        <div className="AuthMenu__content">
            <Link className="AuthMenu__signup-link" to="/signup">Регистрация</Link>
            <div className="AuthMenu__signin-link-container">
                <Link className="AuthMenu__signin-link" to="/signin">Войти</Link>
            </div>
        </div>
    )
}

export default AuthMenu;