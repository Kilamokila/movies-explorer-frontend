import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { useFormWithValidation } from "../../utils/form-validator";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Login({ handleLogin }) {

    const currentUser = useContext(CurrentUserContext);

    const { values, errors, isValid, handleChange, resetForm } = useFormWithValidation();

    function handleChangeInput(event) {
        handleChange(event, currentUser);
    }

    function onSubmit(event) {
        handleLogin(event, values['email'], values['password']);
        resetForm();
    }

    return (
        <div className="Login">
            <div className="Login__container">
            <Link className="Login__logo" to="/"></Link>
                <h2 className="Login__header">Рады видеть!</h2>
                <form
                    action="#"
                    className="Login__form"
                    method="POST"
                    onSubmit={onSubmit}
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
                            onChange={handleChangeInput}
                            value={values['email']} />
                        <span className="Login__form-error">{errors['email']}</span>
                        <label className="Login__input-label" for="password-input">Пароль</label>    
                        <input
                            name="password"
                            id="password-input"
                            type="password"
                            className="Login__input"
                            required
                            minLength="6"
                            maxLength="20"
                            onChange={handleChangeInput}
                            value={values['password']} />
                        <span className="Login__form-error">{errors['password']}</span>   
                        <button className="Login__button" type="submit" disabled={!isValid}>Войти</button>
                        <Link className="Login__signin-link" to="/signup">
                            <span className="Login__signin-link-span">Ещё не зарегистрированы?</span> Регистрация</Link>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default Login