import React, { useEffect, useState } from "react";
const axios = require("axios");

export default function Adminpatients() {
  const [patients, setpatients] = useState([]);
  useEffect(async () => {
    const url = "http://localhost:4000/api/patients/all";
    await axios
      .get(url)
      .then((res) => {
        setpatients(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  });

  const deletePatient = (id) => {
    const url = `http://localhost:4000/api/patients/delete/${id}`;
    axios
      .delete(url)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className="ges">
      <div className="table-items">
        <table>
          <thead>
            <td>Id</td>
            <td>Name</td>
            <td>City</td>
            <td>Email</td>
            <td>Mobile</td>
            <td>Actions</td>
          </thead>
          <tbody>
            {patients.map((item) => (
              <tr>
                <td>{item.id}</td>
                <td>{item.User.name}</td>
                <td>{item.city}</td>
                <td>{item.User.email}</td>
                <td>{item.phone_number}</td>
                <td>
                  <i
                    className="fas fa-trash"
                    onClick={() => deletePatient(item.id)}
                  ></i>
                </td>
              </tr>
            ))}

            <tr>
              <td>1</td>
              <td>Marouane</td>
              <td>Agadir</td>
              <td>marouane@ebourk.com</td>
              <td>0656874578</td>
              <td>
                <i className="fas fa-trash"></i>
              </td>
            </tr>

            <tr>
              <td>1</td>
              <td>Marouane</td>
              <td>Agadir</td>
              <td>marouane@ebourk.com</td>
              <td>0656874578</td>
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
