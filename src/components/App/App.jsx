import React from "react";
import Header from '../Header/Header';
import Main from "../Main/Main";
import { useMediaQuery } from 'react-responsive';
import technologies from "../../utils/constants";
import Footer from "../Footer/Footer";
import { Route, Switch } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

function App() {
    const isTablet = useMediaQuery({ query: `(max-width: 769px)` });
    const isMobile = useMediaQuery({ query: `(max-width: 670px)` });
    const [isLoggedIn, setIsLoggedIn] = React.useState(true);
    const [isNavTabOpen, setIsNavTabOpen] = React.useState(false);
    const [isSaveButtonActive, setIsSaveButtonActive] = React.useState(false);
    const [isDeleteButtonActive, setIsDeleteButtonActive] = React.useState(false);

    function handleOpenNavTab() {
        setIsNavTabOpen(true)
      }

    function handleCloseNavTab() {
        setIsNavTabOpen(false)
      }

    return (
        <body className="App">
            <Switch>
                <Route exact path="/">
                    <Header isTablet={isTablet} isLoggedIn={isLoggedIn} handleOpenNavTab={handleOpenNavTab}/>
                    <Main technologies={technologies}/>
                    <Footer/>
                </Route>
                <ProtectedRoute 
                    exact path="/movies"
                    isLoggedIn={isLoggedIn}
                    isMobile={isMobile}
                    isTablet={isTablet}
                    isOpen={isNavTabOpen}
                    handleOpenNavTab={handleOpenNavTab}
                    handleCloseNavTab={handleCloseNavTab}
                    component={Movies}
                >
                </ProtectedRoute>
                <ProtectedRoute 
                    exact path="/saved-movies"
                    isLoggedIn={isLoggedIn}
                    isMobile={isMobile}
                    isTablet={isTablet}
                    isOpen={isNavTabOpen}
                    handleOpenNavTab={handleOpenNavTab}
                    handleCloseNavTab={handleCloseNavTab}
                    component={SavedMovies}
                >
                </ProtectedRoute>
                <ProtectedRoute
                    exact path="/profile"
                    isLoggedIn={isLoggedIn}
                    isMobile={isMobile}
                    isTablet={isTablet}
                    isOpen={isNavTabOpen}
                    handleOpenNavTab={handleOpenNavTab}
                    handleCloseNavTab={handleCloseNavTab}
                    component={Profile}
                >
                </ProtectedRoute>
                <Route exact path="/signup">
                    <Register />
                </Route>
                <Route exact path="/signin">
                    <Login />
                </Route>
                <Route exact path="/404">
                    <NotFoundPage />
                </Route>
            </Switch>
        </body>
    )
}

export default App;