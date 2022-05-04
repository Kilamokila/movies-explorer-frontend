import React from "react";
import SaveButton from "../SaveButton/SaveButton";
import CheckedButton from "../CheckedButton/CheckedButton";
import DeleteButton from "../DeleteButton/DeleteButton";

function MoviesCard() {
    return(
        <figure className="MoviesCard">
            <img className="MoviesCard__image" src="https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287_960_720.jpg" alt="Стоковая картинка" />
            <figcaption className="MoviesCard__title">Nevermind</figcaption>
{/*             <SaveButton /> */}
{/*             <CheckedButton /> */}
            <DeleteButton />
            <div className="MoviesCard__duration">1ч 14м</div>
        </figure>
    )
}

export default MoviesCard;
