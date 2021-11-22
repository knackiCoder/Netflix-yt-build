import React from "react";
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from "../hooks/use-auth-listener";

export function IsUserRedirect({ loggedInPath, children }) {
   const { user } = useAuth();

   return !user ? children : <Navigate
      to={{ pathname: loggedInPath }}
      replace
   />
}



export function PrivateRoute({ children, loggedInPath }) {
   const { user } = useAuth()
   const location = useLocation();

   return user ? children : <Navigate
      to={{ pathname: loggedInPath }}
      replace
      state={{ path: location.pathname }}
   />;
};
