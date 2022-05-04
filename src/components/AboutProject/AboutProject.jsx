import React from "react"
import SectionTitle from "../SectionTitle/SectionTitle";

function AboutProject() {

    return (
        <section className="AboutProject">
            <div className="AboutProject__content">
                <SectionTitle name={'О проекте'}/>
                <div className="AboutProject__description-container">
                    <div className="AboutProject__description-block">
                        <h3 className="AboutProject__description-title">Дипломный проект включал 5 этапов</h3>
                        <p className="AboutProject__description-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                    </div>
                    <div className="AboutProject__description-block">
                        <h3 className="AboutProject__description-title">На выполнение диплома ушло 5 недель</h3>
                        <p className="AboutProject__description-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                    </div>
                </div>
                <div className="AboutProject__terms-container">
                    <div className="AboutProject__backend-terms-container">
                        <div className="AboutProject__backend-terms-illustration">1 неделя</div>
                        <p className="AboutProject__terms-subtitle">Back-end</p>
                    </div>
                    <div className="AboutProject__frontend-terms-container">
                        <div className="AboutProject__frontend-terms-illustration">4 недели</div>
                        <p className="AboutProject__terms-subtitle">Front-end</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutProject;