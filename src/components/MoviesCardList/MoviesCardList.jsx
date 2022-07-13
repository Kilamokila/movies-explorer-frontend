import React from 'react';
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({slicedMovies}) {

    return(
        <section className="MoviesCardList">
            <div className="MoviesCardList__content">
                {slicedMovies.map((movie) => 
                <MoviesCard
                key={movie.id || movie._id}
                movie={movie}
                />)}
            </div>
        </section>
    )
}

export default MoviesCardList;