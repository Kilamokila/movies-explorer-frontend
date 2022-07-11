import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Main from "../Main/Main";
import { useMediaQuery } from 'react-responsive';
import technologies from "../../utils/constants";
import Footer from "../Footer/Footer";
import { Route, Switch, useHistory } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { MoviesContext } from '../../contexts/MoviesContext';
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NavTab from '../NavTab/NavTab';
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import * as auth from "../../utils/auth"
import { mainApi } from '../../utils/MainApi';
import { moviesApi } from '../../utils/MoviesApi';
import { getItemFromStorage, setItemToStorage, clearStorage } from '../../utils/storage-handlers';
import { useCallback } from 'react';



function App() {
    const history = useHistory();
 
    const isTablet = useMediaQuery({ query: `(max-width: 769px)` });
    const isMobile = useMediaQuery({ query: `(max-width: 670px)` });

    const desktopSize = useMediaQuery({ query: `(max-width: 1280px)` });
    const tabletSize = useMediaQuery({ query: `(max-width: 768px)` });
    const mobileSize = useMediaQuery({ query: `(max-width: 480px)` });

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [isNavTabOpen, setIsNavTabOpen] = useState(false);
    const [isCheckboxAcive, setIsCheckboxAcive] = useState(false);

    const [currentUser, setCurrentUser] = useState({});

    const [searchInputValue, setSearchInputValue] = useState('');

    const [allMovies, setAllMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [shortMovies, setShortMovies] = useState([]);
    
    const [moviesToRender, setMoviesToRender] = useState(12);
    const [renderCounter, setRenderCounter] = useState(3);

    const [savedMovies, setSavedMovies] = useState([]);
    const [savedFilteredMovies, setSavedFilteredMovies] = useState([]);
    const [savedShortMovies, setSavedShortMovies] = useState([]);

    const [preloaderState, setPreloaderState] = useState(false);

  //movies functionality

    async function fetchAllMovies () {
      try {
        setPreloaderState(true);
        const fetchedMovies = await moviesApi.getAllMovies();
        if (fetchedMovies) {
          setAllMovies(fetchedMovies);
          return fetchedMovies;
        }
      }
      catch (error) {
        console.log(error);
        setPreloaderState(false);
      }
      finally {
        setPreloaderState(false);
      }
    }


    async function fetchSavedMovies () {
      try {
        setPreloaderState(true);
        const jwt = getItemFromStorage("jwt");
        if(jwt) {
          const savedMovies = await moviesApi.getSavedMoviesData(jwt);
          if (savedMovies) {
            setSavedMovies(savedMovies);
            return savedMovies;
          }
        }
      }
      catch (error) {
        console.log(error);
        setPreloaderState(false);
      }
      finally {
        setPreloaderState(false);
      }
    }


    async function saveMovie (movie) {
      const movieData = {
        country: movie.country || "Страна неизвестна",
        director: movie.director || "Режиссер неизвестен",
        duration: movie.duration,
        year: movie.year || "Год неизвестен",
        description: movie.description || "Описание отсутствует",
        image: 'https://api.nomoreparties.co'+ movie.image.url || 'https://thumbs.dreamstime.com/z/portrait-laughing-senior-book-looking-camera-sitting-table-36503063.jpg',
        trailerLink: movie.trailerLink || 'https://www.youtube.com/watch?v=du-TY1GUFGk&ab_channel=JimmyHere',
        nameRU: movie.nameRU || 'Неизвестное имя',
        nameEN: movie.nameEN || 'Uknown name',
        thumbnail: 'https://api.nomoreparties.co'+ movie.image.url || 'https://thumbs.dreamstime.com/z/portrait-laughing-senior-book-looking-camera-sitting-table-36503063.jpg',
        movieId: movie.id,
      };
      try {
          const jwt = getItemFromStorage("jwt")
          const hasBeenSaved = await moviesApi.postMovie(movieData, jwt);
          if (hasBeenSaved) {
              setSavedMovies(savedMovies => [ ...savedMovies, hasBeenSaved ]);
          }
      } catch (error) {
          console.log({error});
      }
  };
  

    async function removeMovie (movie) {
      const Id =  movie.movieId || movie.id;
      const movieToRemove = savedMovies.find(savedMovie => savedMovie.movieId === Id);
      try {
          const jwt = getItemFromStorage("jwt")
          const removeConfirmation = await moviesApi.deleteMovie(movieToRemove._id, jwt);
          if (removeConfirmation) {
              const filteredMovies = savedMovies.filter(savedMovie => Id !== savedMovie.movieId);
              const filteredSavedMovies = savedFilteredMovies.filter(savedMovie => Id !== savedMovie.movieId);
              setSavedMovies(filteredMovies);
              setSavedFilteredMovies(filteredSavedMovies);
          }
      } catch (error) {
          console.log(error);
      }
      
  };

  const sliceMovies = useCallback((movies) => movies.slice(0, moviesToRender), [moviesToRender]);

  //Interface functionality

    function handleNavTab() {
        setIsNavTabOpen(!isNavTabOpen)
      }

      function showMore(){
        setMoviesToRender(moviesToRender + renderCounter)
    }

    const setAmountOfRender = () => {
      if (desktopSize) {
        setMoviesToRender(12);
        setRenderCounter(3);
      };
      if (tabletSize) {
        setMoviesToRender(8);
        setRenderCounter(2);
      }
      if (mobileSize) {
        setMoviesToRender(5)
      }
    }

//Auth functionality

    function handleRegister(event, name, email, password) {
        event.preventDefault();
        auth.register(name, email, password).then((res) => {
          setCurrentUser(res);
          history.push("/signin")
        })
          .catch((err) => {
            console.log(err)
          })
      }
    

    function handleLogin(event, email, password) {
      event.preventDefault();
        auth.authorize(email, password)
          .then((data) => {
            if (data.token) {
              setItemToStorage('jwt', data.token)
              setIsLoggedIn(true)
              history.push('/')
            }
          })
          .catch(err => console.log(err));
      }


      function handleLogout(event) {
        event.preventDefault();
        clearStorage();
        tokenCheck();
      }


      function handleUpdateUser(event, newUserData) {
        event.preventDefault();
        const jwt = getItemFromStorage("jwt")
        mainApi.patchUserData(newUserData, jwt)
        .then(newUserData => setCurrentUser(newUserData))
        .catch(err => console.log(err))
    }      

    
    function tokenCheck() {
        if (getItemFromStorage("jwt")) {
          const jwt = getItemFromStorage("jwt")
          if (jwt) {
            auth.getContent(jwt).then((res) => {
              if (res) {
                setIsLoggedIn(true)
              }
            }).catch((error) => {
              console.log(error)
            })
          }
        } else {
        setIsLoggedIn(false)
        setCurrentUser({});
        }
      }
      
      
    useEffect(() => {
        setAmountOfRender();
      }, [desktopSize, tabletSize, mobileSize])


    useEffect(() => {
      if (getItemFromStorage("jwt")) {
        const jwt = getItemFromStorage("jwt")
        Promise.all([moviesApi.getSavedMoviesData(jwt), mainApi.getUserData(jwt)])
        .then(([moviesData, userData]) => {
          setSavedMovies(moviesData)
          setCurrentUser(userData)
        })
          .catch(err => console.log(err))
      }
    }, [isLoggedIn])


  useEffect(() => {
      tokenCheck()
    }, [isLoggedIn])


    const moviesContext = {
      isCheckboxAcive,
      moviesToRender,
      setIsCheckboxAcive,
      searchInputValue, 
      setSearchInputValue,
      allMovies,
      setAllMovies,
      filteredMovies,
      setFilteredMovies,
      shortMovies,
      setShortMovies,
      savedMovies,
      setSavedMovies,
      savedFilteredMovies,
      setSavedFilteredMovies,
      savedShortMovies,
      setSavedShortMovies,
      preloaderState, 
      setPreloaderState,
      sliceMovies,
      showMore,
      fetchAllMovies,
      fetchSavedMovies,
      saveMovie,
      removeMovie
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
          <MoviesContext.Provider value={moviesContext}>
            <div className="App">
                <Switch>
                    <Route exact path="/">
                        <Header isTablet={isTablet} isLoggedIn={isLoggedIn} handleNavTab={handleNavTab}/>
                        { isTablet && <NavTab isOpen={isNavTabOpen} handleNavTab={handleNavTab}/>}
                        <Main technologies={technologies}/>
                        <Footer/>
                    </Route>
                    <ProtectedRoute 
                        exact path="/movies"
                        isMobile={isMobile}
                        isTablet={isTablet}
                        isOpen={isNavTabOpen}
                        handleNavTab={handleNavTab}
                        isLoggedIn={isLoggedIn}
                        component={Movies}
                    >
                    </ProtectedRoute>
                    <ProtectedRoute 
                        exact path="/saved-movies"
                        isLoggedIn={isLoggedIn}
                        isMobile={isMobile}
                        isTablet={isTablet}
                        isOpen={isNavTabOpen}
                        handleNavTab={handleNavTab}
                        component={SavedMovies}
                    >
                    </ProtectedRoute>
                    <ProtectedRoute
                        exact path="/profile"
                        isLoggedIn={isLoggedIn}
                        isMobile={isMobile}
                        isTablet={isTablet}
                        isOpen={isNavTabOpen}
                        handleLogout={handleLogout}
                        handleUpdateUser={handleUpdateUser}
                        handleNavTab={handleNavTab}
                        component={Profile}
                    >
                    </ProtectedRoute>
                    <Route exact path="/signup">
                        <Register 
                          handleRegister={handleRegister}/>
                    </Route>
                    <Route exact path="/signin">
                        <Login 
                          handleLogin={handleLogin}/>
                    </Route>
                    <Route exact path="*">
                        <NotFoundPage />
                    </Route>
                </Switch>
            </div>
            </MoviesContext.Provider>
        </CurrentUserContext.Provider>
    )
}

export default App;