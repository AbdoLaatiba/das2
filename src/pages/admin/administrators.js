import React from "react";
import { withRouter } from "react-router";
import "./admin.scss";

const axios = require("axios");

class Administrators extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      admins: [],
    };
  }

  componentDidMount() {
    const url = "http://localhost:4000/api/admin/all";
    axios
      .get(url)
      .then((res) => {
        this.setState({ admins: res.data });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const url = "http://localhost:4000/api/admin/new";
    const admin = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };

    axios
      .post(url, admin)
      .then((res) => {
        this.props.history.go(0);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="ges">
        <div className="add-admin">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="admin name"
              name="name"
              onChange={this.handleChange}
            />
            <input
              type="email"
              placeholder="admin email"
              name="email"
              onChange={this.handleChange}
            />
            <input
              type="text"
              placeholder="admin password"
              name="password"
              onChange={this.handleChange}
            />
            <input type="submit" value="Regsiter Admin" />
          </form>
        </div>
        <div className="table-items">
          <table>
            <thead>
              <td>Id</td>
              <td>Name</td>
              <td>Email</td>
              <td colSpan="2">Actions</td>
            </thead>
            <tbody>
              {this.state.admins
                ? this.state.admins.map((admin) => (
                    <tr>
                      <td>{admin.id}</td>
                      <td>{admin.name}</td>
                      <td>{admin.email}</td>

                      <td>
                        <i className="fas fa-trash"></i>
                      </td>
                    </tr>
                  ))
                : null}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default withRouter(Administrators);
