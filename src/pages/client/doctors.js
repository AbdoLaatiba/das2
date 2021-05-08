import React from "react";
import "../../styles.scss";
import Doctorcard from "../../components/doctor-card";

export default function Doctors({ doctors }) {
  return (
    <div className="card-container">
      <h1>Our Doctors</h1>
      <div className="cards">
        {doctors.map((doc) => (
          <Doctorcard doc={doc} />
        ))}
        {/* <Doctorcard />
        <Doctorcard />
        <Doctorcard />
        <Doctorcard />
        <Doctorcard />
        <Doctorcard /> */}
      </div>
    </div>
  );
}
