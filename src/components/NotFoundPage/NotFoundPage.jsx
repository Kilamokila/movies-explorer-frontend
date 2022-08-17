import React from "react";
import { useNavigate } from "react-router-dom";

function NotFoundPage() {

    const navigate = useNavigate();

    const goToPrevPage = () => navigate(-1);

    return (
        <section className="NotFoundPage">
            <div className="NotFoundPage__container">
                <h1 className="NotFoundPage__title">404</h1>
                <h2 className="NotFoundPage__subtitle">Страница не найдена</h2>
                <button className="NotFoundPage__exit-link" onClick={goToPrevPage}>Назад</button>
            </div>
        </section>
    )
}

export default NotFoundPage;  