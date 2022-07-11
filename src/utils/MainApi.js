class MainApi {
    constructor({ url, headers }) {
        this._url = url;
        this._headers = headers;
    }

    _checkRes(res) {
        return res.ok ? res.json() : Promise.reject(`Что-то пошло не так: ${res}`);
    }

    getUserData(token) {
        return fetch(`${this._url}/users/me`, {
            method: "GET",
            headers: { ...this._headers, 'Authorization': `Bearer ${token}` }
        })
            .then(this._checkRes)
    }

    patchUserData(userData, token) {
        return fetch(`${this._url}/users/me`, {
            method: "PATCH",
            headers: { ...this._headers, 'Authorization': `Bearer ${token}` },
            body: JSON.stringify(userData),
        })
            .then(this._checkRes)
    }
}

export const mainApi = new MainApi({
    url: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json',
    }
})