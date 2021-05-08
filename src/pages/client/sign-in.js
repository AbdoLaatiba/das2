import React, { useState } from "react";
import { withRouter } from "react-router";
import "../doctor/doctor.scss";
const axios = require("axios");

function Signin({ history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = "http://localhost:4000/api/auth/login";

    axios
      .post(url, {
        email,
        password,
      })
      .then((res) => {
        const { data: jwt } = res;
        localStorage.setItem("token", jwt);
        history.push("/");
        history.go(0);
        // console.log(props);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className="sign-in">
      <form action="" onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <div className="form-input">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Name "
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-input">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password "
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="button">
          <input type="submit" value="Sign in" />
        </div>
      </form>
    </div>
  );
}

export default withRouter(Signin);
