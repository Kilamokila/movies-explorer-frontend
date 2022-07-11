import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { useFormWithValidation } from "../../utils/form-validator";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Register({ handleRegister }) {

    const currentUser = useContext(CurrentUserContext);

    const { values, errors, isValid, handleChange, resetForm } = useFormWithValidation();

    function handleChangeInput(event) {
        handleChange(event, currentUser);
    }

    function onSubmit(event) {
        handleRegister(event, values['name'], values['email'], values['password']);
        resetForm();
    }

    return (
        <div className="Login">
            <div className="Login__container">
                <div className="Login__logo"></div>
                <h2 className="Login__header">Добро пожаловть!</h2>
                <form
                    action="#"
                    className="Login__form"
                    method="POST"
                    onSubmit={onSubmit}
                >
                    <fieldset className="Login__form-settings">
                        <label className="Login__input-label" for="name-input">Имя</label>
                        <input
                            name="name"
                            id="name-input"
                            type="text"
                            className="Login__input"
                            required
                            minLength="2"
                            maxLength="40"
                            onChange={handleChangeInput}
                            value={values['name']} />
                        <span className="Login__form-error">{errors['name']}</span>
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
                        <button className="Login__button" type="submit" disabled={!isValid}>Зарегистрироваться</button>
                        <Link className="Login__signin-link" to="/signin">
                            <span className="Login__signin-link-span">Уже зарегистрированы?</span> Войти</Link>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default Register