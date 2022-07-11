import React, {useContext} from "react";
import SaveButton from "../SaveButton/SaveButton";
import CheckedButton from "../CheckedButton/CheckedButton";
import DeleteButton from "../DeleteButton/DeleteButton";
import { MoviesContext } from "../../contexts/MoviesContext";
import { useLocation } from 'react-router-dom';

function MoviesCard({movie}) {
    
    const { saveMovie,
            savedMovies,
            removeMovie, } = useContext(MoviesContext);

    const location = useLocation();

    const isSaved = savedMovies.some(savedMovie => savedMovie.movieId === movie.id);
    

    const onRenderImage = (movie) => {
        if (location.pathname === '/saved-movies') {
            return movie.image
        }
        else {
            return `https://api.nomoreparties.co${movie.image.url}`
        }
    }

    const onRenderButton = () => {
        if (location.pathname === '/saved-movies') {
            return (<DeleteButton handleRemove={handleRemove}/>)
        }
        else if (isSaved) {
            return (<CheckedButton handleClick={handleClick} />)
        }
        else return <SaveButton handleClick={handleClick}/>
    }
    
    const handleClick = () => {
        if (isSaved) {
            removeMovie(movie);
        } else {
            saveMovie(movie);
        }
    };

    const handleRemove = () => {
        removeMovie(movie);
    };

    function setMoviesTime(duration) {
        return Math.floor(duration / 60) + "ч " + (duration % 60) + "м";
    };

    return(
        <figure className="MoviesCard">
            <a href={`${movie.trailerLink}`} target="blank">
                <img className="MoviesCard__image" src={onRenderImage(movie)} alt="Кадр из фильма" />
            </a>
            <figcaption className="MoviesCard__title">{movie.nameRU}</figcaption>
            {onRenderButton()}
            <div className="MoviesCard__duration">{setMoviesTime(movie.duration)}</div>
        </figure>
    )
}

export default MoviesCard;
