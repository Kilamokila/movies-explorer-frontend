import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";

function AboutMe() {

    return (
        <section className="AboutMe">
            <div className="AboutMe__content">
                <SectionTitle name={'Студент'} />
                <div className="AboutMe__container">
                    <div className="AboutMe__info-container">
                        <h3 className="AboutMe__title">Даниил</h3>
                        <h4 className="AboutMe__subtitle">Начинающий фронтенд-разработчик, 25 лет</h4>
                        <p className="AboutMe__description">
                            Родился и живу в Ижевске. Начал изучать фронтенд-разработку в 2021 году
                            и на сегодняшний день владею базовыми навыками применения технологий: "HTML", "CSS",
                            "JavaScript", "React", "Express.js", "mongoDB". В планах: примкнуть к команде,
                            в которой смогу развивать свои профессиональные навыки и в результат работы 
                            которой буду вносить ощутимый вклад.
                        </p>
                        <div className="AboutMe__links-container">
                            <a className="AboutMe__links" href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook</a>
                            <a className="AboutMe__links" href="https://github.com/Kilamokila" target="_blank" rel="noreferrer">Github</a>
                        </div>
                    </div>
                    <div className="AboutMe__avatar"></div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;