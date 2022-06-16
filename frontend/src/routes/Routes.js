import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "../homepage/Homepage";
import CompanyList from "../companies/CompanyList";
import CompanyDetail from "../companies/CompanyDetail";
import JobList from "../jobs/JobList";

/* Routes for navigation of the site skeleton */

function Routes() {


    return (
        <div className="pt-5">
        <Switch>

          <Route exact path="/">
            <Homepage />
          </Route>

          <Route exact path="/login">
            Login
          </Route>

          <Route exact path="/signup">
            Signup
          </Route>

          <Route exact path="/companies">
            <CompanyList />
          </Route>

          <Route exact path="/jobs">
            <JobList />
          </Route>

          <Route exact path="/companies/:handle">
            <CompanyDetail />
          </Route>

          <Route path="/profile">
            ProfileForm
          </Route>

          <Redirect to="/" />
        </Switch>
      </div>
    )
}
export default Routes;