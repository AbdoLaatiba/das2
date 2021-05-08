import React, { Component } from "react";
import DisplayResults from "./displayResults";
import Doctors from "./doctors";
import Footer from "./footer";
import Header from "./header";
import Navbar from "./nav-bar";

const axios = require("axios");

export default class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      doctors: [],
      specialties: [],
    };
  }

  componentDidMount() {
    let one = "http://localhost:4000/api/doctors/all";
    let two = "http://localhost:4000/api/specialties/all";
    const reqOne = axios.get(one);
    const reqTwo = axios.get(two);
    axios
      .all([reqOne, reqTwo])
      .then(
        axios.spread((doc, spec) => {
          this.setState(
            {
              doctors: doc.data,
              specialties: spec.data,
            }
            // () => console.log(doc.data)
          );
        })
      )
      .catch((errors) => {
        // react on errors.
        console.error(errors);
      });
  }

  onfilter = (c, s) => {
    // console.log(c, s);
    let url = "";
    if (c && s) {
      url = `http://localhost:4000/api/doctors/${c}/${s}`;
      axios
        .get(url)
        .then((res) => {
          this.setState({ doctors: res.data });
        })
        .catch((err) => {
          console.error(err);
        });
    } else if (c) {
      url = `http://localhost:4000/api/doctors/city/${c}`;
      axios
        .get(url)
        .then((res) => {
          this.setState({ doctors: res.data });
        })
        .catch((err) => {
          console.error(err);
        });
    } else if (s) {
      url = `http://localhost:4000/api/doctors/specialty/${s}`;
      axios
        .get(url)
        .then((res) => {
          this.setState({ doctors: res.data });
        })
        .catch((err) => {
          console.error(err);
        });
    }

    // axios
    //   .get(url)
    //   .then((res) => {
    //     console.log("after filter ::" + res);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
  };

  render() {
    return (
      <div>
        {/* <Navbar /> */}
        <Header
          specialties={this.state.specialties}
          doctors={this.state.doctors}
          onFilter={this.onfilter}
        />

        <DisplayResults doctors={this.state.doctors} user={this.props.user} />
        <Doctors doctors={this.state.doctors} />
        <Footer />
      </div>
    );
  }
}
