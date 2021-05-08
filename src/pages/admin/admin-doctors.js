import React, { useEffect, useState } from "react";
const axios = require("axios");

export default function Admindoctors() {
  const [doctors, setdoctors] = useState([]);
  useEffect(async () => {
    const url = "http://localhost:4000/api/doctors/all";
    await axios
      .get(url)
      .then((res) => {
        setdoctors(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  });
  return (
    <div className="ges">
      <div className="filter">
        <select name="" id="">
          <option value="">Confirmed</option>
          <option value="">Not Confirmed</option>
        </select>
      </div>
      <div className="table-items">
        <table>
          <thead>
            <td>Id</td>
            <td>Name</td>
            <td>Email</td>
            <td>Mobile</td>
            <td>Confirmed</td>
            <td colSpan="2">Actions</td>
          </thead>
          <tbody>
            {doctors.map((item) => (
              <tr>
                <td>{item.id}</td>
                <td>{item.User.name}</td>
                <td>{item.User.email}</td>
                <td>{item.phone_number}</td>
                <td>yes</td>
                <td>
                  <i class="fas fa-check-square"></i>
                </td>
                <td>
                  <i className="fas fa-trash"></i>
                </td>
              </tr>
            ))}

            {/* <tr>
              <td>1</td>
              <td>Marouane</td>
              <td>marouane@ebourk.com</td>
              <td>0656874578</td>
              <td>yes</td>
              <td>
                 <button className="confirm">Confirm</button> 
                <i class="fas fa-check-square"></i>
              </td>
              <td>
                <i className="fas fa-trash"></i>
              </td>
            </tr> */}

            <tr>
              <td>1</td>
              <td>Marouane</td>
              <td>marouane@ebourk.com</td>
              <td>0656874578</td>
              <td>yes</td>
              <td>
                {/* <button className="confirm">Confirm</button> */}
                <i class="fas fa-check-square"></i>
              </td>
              <td>
                <i className="fas fa-trash"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
