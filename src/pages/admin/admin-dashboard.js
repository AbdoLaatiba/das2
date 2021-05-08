import React from "react";
import Chart from "./dashboard-chart";

export default function Admindashboard() {
  return (
    <div className="dashboard">
      <div className="card">
        <div className="title">doctors</div>
        <div className="content">
          <i className="fas fa-stethoscope"></i>
          1,349  doctors
        </div>
      </div>
      <div className="card">
        <div className="title">patients</div>
        <div className="content">
          <i className="fas fa-procedures"></i>
          103,200 patients
        </div>
      </div>
      <div className="card">
        <div className="title">appointments made</div>
        <div className="content">
          <i class="fas fa-calendar-check"></i>
          3,013,413
        </div>
      </div>
      <Chart />
    </div>
  );
}
