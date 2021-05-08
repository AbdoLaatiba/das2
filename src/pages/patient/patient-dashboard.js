import React from "react";

export default function PatientDashboard() {
  return (
    <div className="dashboard">
      <div className="greeting">
        <h1>hello, marouane!</h1>
      </div>
      <div className="card">
        <div className="title">doctors</div>
        <div className="content">
          <i className="fas fa-stethoscope"></i>2 doctors
        </div>
      </div>
      <div className="card">
        <div className="title">appointments made</div>
        <div className="content">
          <i class="fas fa-calendar-check"></i>3
        </div>
      </div>
    </div>
  );
}
