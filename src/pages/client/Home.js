import React, { Component } from "react";

import jwtDecode from "jwt-decode";
import "../../App.css";
import Navbar from "./nav-bar";

import { Route, Switch, useRouteMatch, Redirect } from "react-router-dom";
import Content from "./content";
import Doctorregister from "../doctor/doctor-register";
import Doctorcard from "../../components/doctor-card";
import Signin from "./sign-in";
import Patientregister from "../patient/patient-register";
import Profile from "../doctor/profile";
import Logout from "./logout";
import AppMod from "./Modal";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentDidMount() {
    try {
      const jwt = localStorage.getItem("token");
      const user = jwtDecode(jwt);
      this.setState({ user });
    } catch {}
  }
  render() {
    let { path, url } = this.props.match;
    return (
      <div className="App">
        <Navbar user={this.state.user} />
        <Switch>
          <Route
            exact
            path={path}
            render={() => <Content user={this.state.user} />}
          />
          <Route path={`${path}doc/register`}>
            <Doctorregister />
          </Route>
          <Route path={`${path}signin`}>
            <Signin />
          </Route>
          <Route path={`${path}logout`}>
            <Logout />
          </Route>
          <Route path={`${path}patient/register`}>
            <Patientregister />
          </Route>
          <Route path={`${path}doc/profile`}>
            <Profile />
          </Route>
          <Route path={`${path}modal`}>
            <AppMod />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default Home;
