import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import Technology from "../Technology/Technology";

function Techs({ technologies }) {

    return (
        <section className="Techs">
            <div className="Techs__content">
                <SectionTitle name={'Технологии'} />
                <h3 className="Techs__title">7 технологий</h3>
                <p className="Techs__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                <div className="Techs__container">
                    {technologies.map((technology) => 
                    <Technology name={technology} />
                    )}
                </div>
            </div>
        </section>
    )
}

export default Techs;