import React from "react";

export default function AdminAppointment() {
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
            <td>Doctor Name</td>
            <td>Patient Name</td>
            <td>Slot</td>
            <td>Confirmed</td>
            <td colSpan="2">Actions</td>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Marouane</td>
              <td>Marouane Ebourk</td>
              <td>8:15</td>
              <td>yes</td>

              <td>
                <i className="fas fa-trash"></i>
              </td>
            </tr>

            <tr>
              <td>1</td>
              <td>Marouane</td>
              <td>Marouane Ebourk</td>
              <td>8:15</td>
              <td>yes</td>

              <td>
                <i className="fas fa-trash"></i>
              </td>
            </tr>

            <tr>
              <td>1</td>
              <td>Marouane</td>
              <td>Marouane Ebourk</td>
              <td>8:15</td>
              <td>yes</td>

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
