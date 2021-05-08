import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import PatientDashboard from "./patient-dashboard";
import Adminnavbar from "./patient-navbar";
import Adminsidebar from "./patient-sidebar";
import "./patient.scss";
import PatientAppointment from "./patient-appointments";

export default function Admin() {
  let { path, url } = useRouteMatch();
  return (
    <div className="admindashboard">
      <Adminsidebar className="side" />
      <div className="main-content">
        <Adminnavbar />
        <Switch>
          <Route exact path={`${path}`} component={PatientDashboard} />
          <Route path={`${path}/appointments`} component={PatientAppointment} />
        </Switch>
      </div>
    </div>
  );
}
