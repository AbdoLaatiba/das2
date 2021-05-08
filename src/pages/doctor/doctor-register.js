import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import "./doctor.scss";
import "./doctor-register.scss";

const axios = require("axios");

class Doctorregister extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      address: "",
      phone_number: "",
      city: "",
      cost: "",
      specialty: "",
      education: "",
      educations: [],
    };
  }

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  resetState = () => {
    this.setState({
      name: "",
      email: "",
      password: "",
      address: "",
      phone_number: "",
      city: "",
      cost: "",
      specialty: "",
      education: "",
      educations: [],
    });
  };

  render() {
    const handleSubmit = async (e) => {
      e.preventDefault();
      const {
        name,
        email,
        password,
        address,
        phone_number,
        city,
        cost,
        educations,
        specialty,
      } = this.state;
      const doctor = {
        name: name,
        email: email,
        password: password,
        address: address,
        city: city,
        cost: cost,
        phone_number: phone_number,
        specialty: specialty,
        education: educations,
      };

      axios({
        method: "post",
        url: "http://localhost:4000/api/doctors/new",
        data: doctor,
      })
        .then((res) => {
          const { data: jwt } = res;
          localStorage.setItem("token", jwt);
          this.props.history.push("/");
          this.props.history.go(0);
        })
        .catch((err) => console.error(err));

      this.resetState();
    };
    return (
      <div>
        {/* Register Form */}
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
                  onChange={this.onChange}
                  value={this.state.name}
                />
              </div>
              <div className="form-input">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email"
                  onChange={this.onChange}
                  value={this.state.email}
                />
              </div>
            </div>

            <div className="form-group">
              <div className="form-input">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="address "
                  onChange={this.onChange}
                  value={this.state.address}
                />
              </div>
              <div className="form-input">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                  onChange={this.onChange}
                  value={this.state.password}
                />
              </div>
            </div>

            <div className="form-group">
              <div className="form-input">
                <label htmlFor="phone_number">Phone number</label>
                <input
                  type="text"
                  name="phone_number"
                  id="phone_number"
                  placeholder="phone_number "
                  onChange={this.onChange}
                  value={this.state.phone_number}
                />
              </div>
              <div className="form-input">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  placeholder="city"
                  onChange={this.onChange}
                  value={this.state.city}
                />
              </div>
            </div>

            <div className="form-group">
              <div className="form-input">
                <label htmlFor="specialty">Specialty</label>
                <input
                  type="text"
                  name="specialty"
                  id="specialty"
                  placeholder="specialty"
                  onChange={this.onChange}
                  value={this.state.specialty}
                />
              </div>
              <div className="form-input">
                <label htmlFor="cost">Cost</label>
                <input
                  type="number"
                  name="cost"
                  id="cost"
                  placeholder="cost"
                  step="0.1"
                  onChange={this.onChange}
                  value={this.state.cost}
                />
              </div>
            </div>

            <div className="form-group">
              {/* <div className="form-input">
                <label htmlFor="image">Image</label>
                <input
                  type="file"
                  name="image"
                  id="image"
                  onChange={(e) =>this.onfilechange}
                />
              </div> */}
              {/* <div className="form-input">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" placeholder="email" />
            </div> */}
              <div className="form-input">
                <label htmlFor="education">Education</label>
                <div className="edu">
                  <input
                    type="text"
                    name="education"
                    id="education"
                    placeholder="education"
                    onChange={this.onChange}
                    value={this.state.education}
                  />
                  <i
                    className="fa fa-plus-circle"
                    onClick={() =>
                      this.setState({
                        educations: this.state.educations.concat([
                          this.state.education,
                        ]),
                        education: "",
                      })
                    }
                  ></i>
                </div>
              </div>
            </div>
            <div className="datalist">
              <ul>
                {this.state.educations.length ? (
                  this.state.educations.map((edu) => <li>{edu}</li>)
                ) : (
                  <li>No educations</li>
                )}
              </ul>
            </div>
            <div className="button">
              <input type="submit" value="Register" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Doctorregister);
