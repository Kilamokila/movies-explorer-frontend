import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedAuthRoutes = ({ isLoggedIn }) => {
    return (!isLoggedIn ? <Outlet/> : <Navigate to="/movies" />);
};

export default ProtectedAuthRoutes; 