import React from "react";

function Portfolio() {

    return (
        <section className="Portfolio">
            <ul className="Portfolio__content">
                <h2 className="Portfolio__title">Портфолио</h2>
                <li className="Portfolio__link-container">
                    <a className="Portfolio__link" href="https://github.com/Kilamokila?tab=repositories" target="_blank" rel="noreferrer">Статичный сайт</a>
                    <a className="Portfolio__link-arrow" href="https://github.com/Kilamokila?tab=repositories" target="_blank" rel="noreferrer">
                        <div className="Portfolio__link-icon"></div>
                    </a>
                </li>
                <li className="Portfolio__link-container">
                    <a className="Portfolio__link" href="https://github.com/Kilamokila/russian-travel" target="_blank" rel="noreferrer">Адаптивный сайт</a>
                    <a className="Portfolio__link-arrow" href="https://github.com/Kilamokila/russian-travel" target="_blank" rel="noreferrer">
                        <div className="Portfolio__link-icon"></div>
                    </a>
                </li>
                <li className="Portfolio__link-container">
                    <a className="Portfolio__link" href="https://github.com/Kilamokila/react-mesto-api-full" target="_blank" rel="noreferrer">Одностраничное приложение</a>
                    <a className="Portfolio__link-arrow" href="https://github.com/Kilamokila/react-mesto-api-full" target="_blank" rel="noreferrer">
                        <div className="Portfolio__link-icon"></div>
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default Portfolio;