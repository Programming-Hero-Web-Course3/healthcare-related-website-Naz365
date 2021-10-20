import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const PrivateRoute = ({ children, ...rest }) => {
   
    const { user,isLoading } = useAuth();
    if (isLoading) {
        return (
          <div className="d-flex justify-content-center align-items-center spinner">
            <div
              className="spinner-border"
              role="status"
              style={{ width: "9rem", height: "9rem" }}
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        );
      }
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ?
                children :
                <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: location }
                    }}
                ></Redirect>}
        >

        </Route>
    );
};

export default PrivateRoute;