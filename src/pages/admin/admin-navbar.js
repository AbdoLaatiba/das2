import React from "react";

export default function Adminnavbar() {
  return (
    <div className="admin-navbar">
      <div className="menu">
        <i className="fa fa-bars"></i>
      </div>
      <ul>
        <li>Welcome Marouane Ebourk</li>
        <li>
          <i style={{ fontSize: 22 }} className="fa fa-user"></i>
        </li>
      </ul>
    </div>
  );
}
