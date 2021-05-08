import React from "react";
import "./admin.scss";

export default function Administrators() {
  return (
    <div className="ges">
      <div className="add-admin">
        <form action="">
          <input type="text" placeholder="admin name" />
          <input type="email" placeholder="admin email" />
          <input type="text" placeholder="admin password" />
          <input type="submit" value="Regsiter Admin" />
        </form>
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
                <i className="fas fa-trash"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
