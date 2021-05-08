import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import jwtDecode from "jwt-decode";

import Home from "./pages/client/Home";

import Patient from "./pages/patient/patient";
import Doctor from "./pages/doctor/doctor";
import Admin from "./pages/admin/admin";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
    };

    try {
      const jwt = localStorage.getItem("token");
      const user = jwtDecode(jwt);
      this.state = { user: user };
      // console.log(this.state.user);
    } catch {}
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/admin" component={Admin} />

            {/* this is the admin protected route  */}
            {/* <Route
              path="/admin"
              render={() => {
                if (this.state.user.role == 1) {
                  return <Admin />;
                } else {
                  return <Redirect to="/" />;
                }
              }}
            /> */}

            <Route path="/doctor/dashboard" component={Doctor} />

            {/* this is the doctor protected route  */}
            {/* <Route
              path="/doctor/dashboard"
              render={() => {
                if (this.state.user.role == 2) {
                  return <Doctor />;
                } else {
                  return <Redirect to="/" />;
                }
              }}
            /> */}

            <Route path="/patient/dashboard" component={Patient} />

            {/* this the patient protected route */}
            {/* <Route
              path="/patient/dashboard"
              render={() => {
                if (this.state.user.role == 3) {
                  return <Patient />;
                } else {
                  return <Redirect to="/" />;
                }
              }}
            /> */}
            <Route path="/" component={Home} user={this.state.user} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
