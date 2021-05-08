import React, { useState, useEffect } from "react";
import "../../styles.scss";

export default function Header({ doctors, specialties, onFilter }) {
  const [city, setCity] = useState("");
  const [specialty, setSpecialty] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter(city, specialty);
  };
  return (
    <div className="header">
      <span>Find doctors from your home</span>
      <form action="" onSubmit={handleSubmit}>
        <div className="form-item">
          {/* <label htmlFor="city">filter by city</label> */}
          <input
            type="text"
            placeholder="City ..."
            list="cities"
            onChange={(e) => setCity(e.target.value)}
          />
          <datalist id="cities">
            {doctors.map((d) => (
              <option>{d.city}</option>
            ))}
          </datalist>
        </div>
        <div className="form-item">
          {/* <label htmlFor="city">filter by spacialty</label> */}
          <input
            type="text"
            placeholder="Specialty ..."
            list="specialties"
            onChange={(e) => setSpecialty(e.target.value)}
          />
          <datalist id="specialties">
            {specialties.map((s) => (
              <option>{s.name}</option>
            ))}
          </datalist>
        </div>

        <div className="form-item">
          <input
            type="submit"
            value="Search doctors"
            // onClick={}
          />
        </div>
      </form>
    </div>
  );
}
