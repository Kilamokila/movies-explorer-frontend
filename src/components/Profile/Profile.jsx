import React from "react";
import Header from "../Header/Header";
import NavTab from "../NavTab/NavTab";

function Profile({ isTablet, isOpen, isLoggedIn, handleOpenNavTab, handleCloseNavTab }) {
    return (
        <>
        <Header isTablet={isTablet} isLoggedIn={isLoggedIn} handleOpenNavTab={handleOpenNavTab}/>
        <section className="Profile">
            <div className="Profile__content">
                <h1 className="Profile__title">Привет, Username!</h1>
                <form className="Profile__form" action="#">
                    <fieldset className="Profile__fieldset">
                        <input 
                            className="Profile__form-input" 
                            type="text" 
                            value={'Имя Username'} 
                            placeholder={"Имя"}
                            required
                            minLength="2"
                            maxLength="40"
                        />
                        <input 
                            className="Profile__form-input" 
                            type="email" 
                            value={'Email email@email.io'} 
                            placeholder={"Email"} 
                            required
                            minLength="5"
                            maxLength="20"
                            />
                            <div className="Profile__button-container">
                                <button className="Profile__button" type="button">Редактировать</button>
                                <button className="Profile__button" type="button">Выйти из аккаунта</button>
                            </div>
                    </fieldset>
                </form>
            </div>
            { isTablet && <NavTab isOpen={isOpen} handleCloseNavTab={handleCloseNavTab}/> }
        </section>
        </>
    )
}

export default Profile;  