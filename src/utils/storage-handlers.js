export const getItemFromStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
};

export const removeItemFromStorage = (key) => {
    localStorage.removeItem(key);
};

export const setItemToStorage = (key, item) => {
    localStorage.setItem(key, JSON.stringify(item));
};

export const clearStorage = () => {
    localStorage.clear();
};

export const pushDataToStorage = (filteredMovies, shortMovies, requestField, isCheckboxAcive) => {
    setItemToStorage('filteredMovies', filteredMovies);
    setItemToStorage('shortMovies', shortMovies);
    setItemToStorage('requestField', requestField || '');
    setItemToStorage('isCheckboxAcive', isCheckboxAcive);
};

export const grabFromStorage = (filteredMovies, shortMovies, requestField, isCheckboxAcive) => {
    const data = {};
    data.filteredMovies = getItemFromStorage(filteredMovies) || [];
    data.shortMovies = getItemFromStorage(shortMovies) || [];
    data.requestField = getItemFromStorage(requestField) || '';
    data.savedFilter = getItemFromStorage(isCheckboxAcive) || false;
    return data;
};
