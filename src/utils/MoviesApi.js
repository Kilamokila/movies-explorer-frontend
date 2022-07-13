class MoviesApi {
    constructor({ url, headers }) {
        this._url = url;
        this._headers = headers;
    }

    _checkRes(res) {
        return res.ok ? res.json() : Promise.reject(`Что-то пошло не так: ${res}`);
    }

    getAllMovies() {
        return fetch(`https://api.nomoreparties.co/beatfilm-movies`, {
            method: "GET",
            headers: { ...this._headers },
        })
            .then(this._checkRes)
    }

    getSavedMoviesData(token) {
        return fetch(`${this._url}movies`, {
            method: "GET",
            headers: { ...this._headers, 'Authorization': `Bearer ${token}` },
        })
            .then(this._checkRes)
    }

    postMovie(movieData, token) {
        return fetch(`${this._url}movies`, {
            method: "POST",
            headers: { ...this._headers, 'Authorization': `Bearer ${token}` },
            body: JSON.stringify(movieData),
        })
            .then(this._checkRes)
    }

    deleteMovie(movieId, token) {
        return fetch(`${this._url}movies/${movieId}`, {
            method: "DELETE",
            headers: { ...this._headers, 'Authorization': `Bearer ${token}` },
        })
            .then(this._checkRes)
    }

}

export const moviesApi = new MoviesApi({
    url: 'https://api.dan2491.nomoredomains.xyz/',
    headers: {
        'Content-Type': 'application/json',
    }
})