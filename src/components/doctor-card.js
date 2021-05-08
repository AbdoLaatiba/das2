import React from "react";
import doctor from "../assets/doctor.jpg";
import { Link } from "react-router-dom";

export default function Doctorcard({ doc }) {
  return (
    <div className="card">
      <div className="profile-img">
        <img src={doctor} alt="" />
      </div>
      <div className="profile-info">
        <h3>{doc.name}</h3>
        <span>{doc.Specialties[0].name}</span>
      </div>
      <div className="profile-details">
        <ul>
          <li>
            <i class="fas fa-map-marker-alt"></i> {doc.address}
          </li>
          <li>
            <i class="fas fa-map-marker-alt"></i> rating
          </li>
          <li>
            <i class="far fa-money-bill-alt"></i> {doc.cost}$
          </li>
        </ul>
      </div>

      <div className="profile-buttons">
        <Link to="/doc/profile">
          <button>Register</button>
        </Link>
      </div>
    </div>
  );
}
