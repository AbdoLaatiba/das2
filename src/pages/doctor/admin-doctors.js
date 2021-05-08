import React from "react";

export default function Admindoctors() {
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
