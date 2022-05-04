import React from "react";

function Footer() {
    return (
        <footer className='Footer'>
            <div className="Footer__content">
                <div className="Footer__title-container">
                    <p className="Footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
                </div>
                <div className="Footer__date-and-links-container">
                    <p className="Footer__date">© 2022</p>
                    <div className="Footer__links-container">
                        <a className="Footer__link" href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
                        <a className="Footer__link" href="https://github.com/Kilamokila" target="_blank" rel="noreferrer">Github</a>
                        <a className="Footer__link" href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;  