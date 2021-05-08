import React from "react";
import profileImg from "../../assets/blank-profile.svg";

export default function AppointmentCard(props) {
  return (
    <div className="appointment-card">
      <div className="doctor-img">
        <img src={profileImg} alt="" />
      </div>
      <div className="details">
        <div className="title">
          <h1>{props.docName}</h1>
        </div>
        <div className="details">
          <p>
            <strong>Date :</strong>
            {props.date}
          </p>
          <p>
            <strong>slot :</strong>
            {props.slot}
          </p>
        </div>
      </div>
    </div>
  );
}
