import React, {useContext} from "react";
import Header from "../Header/Header";
import NavTab from "../NavTab/NavTab";
import { useFormWithValidation } from "../../utils/form-validator";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile({ isTablet, isOpen, isLoggedIn, handleNavTab,  handleUpdateUser, handleLogout }) {

    const currentUser = useContext(CurrentUserContext);

    const { values, errors, isValid, handleChange, resetForm} = useFormWithValidation();

    function handleChangeInput(event) {
        handleChange(event, currentUser);
    }

    function onSubmit(event) {
        handleUpdateUser(event, values);
        alert('Данные пользователя успешно отредактрованы');
        resetForm();
    }

    return (
        <>
        <Header isTablet={isTablet} isLoggedIn={isLoggedIn} handleNavTab={handleNavTab}/>
        <section className="Profile">
            <div className="Profile__content">
                <h1 className="Profile__title">Привет, {currentUser.name}</h1>
                <form className="Profile__form" action="#" onSubmit={onSubmit}>
                    <fieldset className="Profile__fieldset">
                        <input 
                            className="Profile__form-input" 
                            type="text" 
                            name="name"
                            value={values['name'] || ''}
                            onChange={handleChangeInput}
                            placeholder={`Имя ${currentUser.name}`}
                            required
                            minLength="2"
                            maxLength="40" />
                        <span className="Login__form-error">{errors['name']}</span>
                        <input 
                            className="Profile__form-input" 
                            type="email"
                            name="email"
                            value={values['email'] || ''}
                            onChange={handleChangeInput}
                            placeholder={`Email ${currentUser.email}`} 
                            required
                            minLength="5"
                            maxLength="20" />
                        <span className="Login__form-error">{errors['email']}</span>
                            <div className="Profile__button-container">
                                <button className="Profile__button" type="submit" disabled={!isValid}>Редактировать</button>
                                <button className="Profile__button" type="button" onClick={handleLogout}>Выйти из аккаунта</button>
                            </div>
                    </fieldset>
                </form>
            </div>
            { isTablet && <NavTab isOpen={isOpen} handleNavTab={handleNavTab}/> }
        </section>
        </>
    )
}

export default Profile;  