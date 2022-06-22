import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import UserContext from "../auth/UserContext";
import LoadingSpinner from "../common/LoadingSpinner";

/* Used for route authorization requiring a currentUser.
 *
 * PrivateRoute is a component used to integrate route with require authorization.
 * This will check for a currentUser, and once validate, will route to the requested path.
 * 
*/

function PrivateRoute({ exact, path, children }) {
  const { currentUser } = useContext(UserContext);

  if (!currentUser) {
    return <LoadingSpinner />;
  }

  return (
      <Route exact={exact} path={path}>
        {children}
      </Route>
  );
}

export default PrivateRoute;
