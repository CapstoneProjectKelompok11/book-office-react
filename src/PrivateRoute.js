import React from 'react';
import { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Cookies from "js-cookie";

export const PrivateRoute = () => {
    const token = (Cookies.get('token'))

    if (token !== undefined) {
        return <Outlet/>
      } else {
        return <Navigate to="/"/>
      }


    
}