import React from "react";
import { Link } from "react-router-dom";
import FormError from "../FormError/FormError";

function Login({ /* email, password, name, setEmail, setPassword, setName, handleRegister */ }) {

/*     function handleChangeEmail(e) {
        setEmail(e.target.value)
    }

    function handleChangePassword(e) {
        setPassword(e.target.value)
    }

    function handleChangeName(e) {
        setName(e.target.value)
    } */

    return (
        <div className="Login">
            <div className="Login__container">
                <div className="Login__logo"></div>
                <h2 className="Login__header">Рады видеть!</h2>
                <form
                    action="#"
                    className="Login__form"
                    method="POST"
                    /* onSubmit={handleRegister} */
                >
                    <fieldset className="Login__form-settings">
                        <label className="Login__input-label" for="email-input">E-mail</label>    
                        <input
                            name="email"
                            id="email-input"
                            type="email"
                            className="Login__input"
                            required
                            minLength="2"
                            maxLength="40"
                            /* onChange={handleChangeEmail} */
                            /* value={email || ""} */ />
                        <FormError />
                        <label className="Login__input-label" for="password-input">Пароль</label>    
                        <input
                            name="password"
                            id="password-input"
                            type="password"
                            className="Login__input"
                            required
                            minLength="5"
                            maxLength="20"
                            /* onChange={handleChangePassword} */
                            /* value={password || ""} */ />
                         <FormError />   
                        <button className="Login__button" type="submit">Войти</button>
                        <Link className="Login__signin-link" to="/signup">
                            <span className="Login__signin-link-span">Ещё не зарегистрированы?</span> Регистрация</Link>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default Login