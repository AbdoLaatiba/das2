import React from "react";

const axios = require("axios");

export default class AdminAppointment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const url = "http://localhost:4000/api/apps/all";
    axios
      .get(url)
      .then((res) => {
        const { data } = res;
        this.setState({ data });
        // console.log(this.state.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    return (
      <div className="ges">
        <div className="filter">
          <select name="" id="">
            <option value="">Confirmed</option>
            <option value="">Not Confirmed</option>
          </select>
        </div>
        <div className="table-items">
          <table>
            <thead>
              <td>Id</td>
              <td>Doctor Name</td>
              <td>Patient Name</td>
              <td>Slot</td>
              <td>Confirmed</td>
              <td>Completed</td>
              <td colSpan="2">Actions</td>
            </thead>
            <tbody>
              {this.state.data
                ? this.state.data.map((app) => {
                    return (
                      <tr>
                        <td>{app.id}</td>
                        <td>{app.Doctor.User.name}</td>
                        <td>{app.Patient.User.name}</td>
                        <td>{app.Slot.id}</td>
                        <td>{app.confirmed ? "yes" : "no"}</td>
                        <td>{app.completed ? "yes" : "no"}</td>

                        <td>
                          <i className="fas fa-trash"></i>
                        </td>
                      </tr>
                    );
                  })
                : null}

              {/* <tr>
                <td>1</td>
                <td>Marouane</td>
                <td>Marouane Ebourk</td>
                <td>8:15</td>
                <td>yes</td>

                <td>
                  <i className="fas fa-trash"></i>
                </td>
              </tr>

              <tr>
                <td>1</td>
                <td>Marouane</td>
                <td>Marouane Ebourk</td>
                <td>8:15</td>
                <td>yes</td>

                <td>
                  <i className="fas fa-trash"></i>
                </td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
