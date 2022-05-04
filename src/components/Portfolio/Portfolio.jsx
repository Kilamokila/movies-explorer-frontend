import React from "react";

function Portfolio() {

    return (
        <section className="Portfolio">
            <div className="Portfolio__content">
                <h2 className="Portfolio__title">Портфолио</h2>
                <div className="Portfolio__link-container">
                    <a className="Portfolio__link" href="https://github.com/Kilamokila?tab=repositories" target="_blank" rel="noreferrer">Статичный сайт</a>
                    <div className="Portfolio__link-icon"></div>
                </div>
                <div className="Portfolio__link-container">
                    <a className="Portfolio__link" href="https://github.com/Kilamokila/russian-travel" target="_blank" rel="noreferrer">Адаптивный сайт</a>
                    <div className="Portfolio__link-icon"></div>
                </div>
                <div className="Portfolio__link-container">
                    <a className="Portfolio__link" href="https://github.com/Kilamokila/react-mesto-api-full" target="_blank" rel="noreferrer">Одностраничное приложение</a>
                    <div className="Portfolio__link-icon"></div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;