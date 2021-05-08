import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import "./client.css";

const axios = require("axios");

function Modal({ text, date, id, user, history }) {
  const [open, setOpen] = useState(false);
  let patient;

  useEffect(() => {
    const url = `http://localhost:4000/api/patients/${user.id}`;
    axios
      .get(url)
      .then((res) => {
        patient = res.data;
      })
      .catch((err) => {
        console.error(err);
      });
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    if (user && user.role == 3) {
      const url = `http://localhost:4000/api/apps/new/${id}`;
      const app = {
        app_date: date,
        PatientId: patient.id,
      };
      console.log(app);
      axios
        .post(url, app)
        .then((res) => {
          console.log(res);
          setOpen(false);

          history.go(0);
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      window.location = "/signin";
    }
  };
  return (
    <React.Fragment>
      <button
        onClick={() => setOpen(true)}
        style={{
          backgroundColor: "transparent",
          border: "none",
          width: "100%",
          cursor: "pointer",
          padding: "1rem",
          margin: "none",
        }}
      >
        {text}
      </button>
      <div id="myModal" className={open ? "modal active" : "modal"}>
        <div class="modal-content">
          <span class="close" onClick={() => setOpen(false)}>
            &times;
          </span>
          <div className="add-admin">
            <form onSubmit={handleSubmit}>
              <label htmlFor="slot">Appointment slot:</label>
              <input type="text" value={text} id="slot" readOnly />
              <label htmlFor="app-date">Appointment date:</label>
              <input type="text" value={date} readOnly id="app-date" />
              <button type="submit" className="btnModal">
                Confirm
              </button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default withRouter(Modal);
