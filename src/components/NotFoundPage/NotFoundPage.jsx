import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
        <section className="NotFoundPage">
            <div className="NotFoundPage__container">
                <h1 className="NotFoundPage__title">404</h1>
                <h2 className="NotFoundPage__subtitle">Страница не найдена</h2>
                <Link className="NotFoundPage__exit-link" to="/">Назад</Link>
            </div>
        </section>
    )
}

export default NotFoundPage;  