import React, { useState } from "react";
import AppointmentCard from "./appointment-card";
export default function PatientAppointment() {
  const [scheduled, setSchedueled] = useState(true);
  const [finished, setFinished] = useState(false);

  const hideContent = () => {
    setSchedueled(false);
    setFinished(false);
  };
  return (
    <div className="dashboard">
      <h1 className="title">Your appointments : </h1>
      <div className="appointments">
        <div className="content-container">
          <div className="buttons">
            <button
              onClick={() => {
                hideContent();
                setSchedueled(true);
              }}
            >
              scheduled
            </button>
            <button
              onClick={() => {
                hideContent();
                setFinished(true);
              }}
            >
              finished
            </button>
          </div>
          <div className="content">
            <div className={scheduled ? "scheduled active" : "scheduled"}>
              <AppointmentCard docName="ahmed" date="14/05/2021" slot="15:00" />
              <AppointmentCard docName="ahmed" date="16/05/2021" slot="14:00" />
              <AppointmentCard
                docName="marouane"
                date="17/05/2021"
                slot="14:00"
              />
            </div>
            <div className={finished ? "finished active" : "finished"}>
              <AppointmentCard
                docName="marouane"
                date="03/04/2021"
                slot="15:00"
              />
              <AppointmentCard
                docName="marouane"
                date="14/04/2021"
                slot="14:00"
              />
              <AppointmentCard docName="ahmed" date="18/04/2021" slot="14:00" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
