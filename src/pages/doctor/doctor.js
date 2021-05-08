import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Admindashboard from "./admin-dashboard";
import Admindoctors from "./admin-doctors";
import Adminnavbar from "./admin-navbar";
import Adminsidebar from "./admin-sidebar";
import Adminpatients from "./admin-patients";
import "./admin.scss";
import AdminAppointment from "./admin-appointments";
import Administrators from "./administrators";

export default function Patient() {
  let { path, url } = useRouteMatch();
  return (
    <div className="admindashboard">
      <Adminsidebar className="side" />
      <div className="main-content">
        <Adminnavbar />
        <Switch>
          <Route exact path={`${path}`} component={Admindashboard} />
          <Route exact path={`${path}/doctors`} component={Admindoctors} />
          <Route exact path={`${path}/patients`} component={Adminpatients} />
          <Route path={`${path}/appointments`} component={AdminAppointment} />
          <Route path={`${path}/administrators`} component={Administrators} />
        </Switch>
      </div>
    </div>
  );
}
