import React from 'react';
import { Navigate } from 'react-router-dom';


export const PrivateRoute = ({ element }) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'

    if (!isAuthenticated) {
        localStorage.removeItem('isAuthenticated');
        return <Navigate to="" />
    }

    return element
}

