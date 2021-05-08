import React, { useState } from "react";
import { withRouter } from "react-router";
import "../doctor/doctor.scss";

const axios = require("axios");

function Patientregister({ history }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [phone_number, setPhone_number] = useState("");

  const resetState = () => {
    setName("");
    setEmail("");
    setAddress("");
    setPassword("");
    setCity("");
    setPhone_number("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const patient = {
      name,
      email,
      password,
      address,
      city,
      phone_number,
    };

    axios({
      method: "post",
      url: "http://localhost:4000/api/patients/new",
      data: patient,
    })
      .then((res) => {
        const { data: jwt } = res;
        localStorage.setItem("token", jwt);
        history.push("/");
        history.go(0);
      })
      .catch((err) => console.error(err));

    resetState();
  };

  return (
    <div>
      {/* Patient Form */}
      <div className="register">
        <form onSubmit={handleSubmit}>
          <h1>Register</h1>
          <div className="form-group">
            <div className="form-input">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="full name "
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <div className="form-input">
              <label htmlFor="address">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-input">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                name="address"
                id="address"
                placeholder="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <div className="form-input">
              <label htmlFor="city">City</label>
              <input
                type="text"
                name="city"
                id="city"
                placeholder="full name "
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="form-input">
              <label htmlFor="phone_number">Phone number</label>
              <input
                type="text"
                name="phone_number"
                id="phone_number"
                placeholder="phone_number"
                value={phone_number}
                onChange={(e) => setPhone_number(e.target.value)}
              />
            </div>
          </div>

          <div className="button">
            <input type="submit" value="Register" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default withRouter(Patientregister);
