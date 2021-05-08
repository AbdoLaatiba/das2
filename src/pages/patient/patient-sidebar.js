import React from "react";
import "./patient.scss";
import Logo from "../../assets/health.svg";
import Sidebarbutton from "./sidebar-button";

export default function Adminsidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={Logo} alt="" width={100} height={100} />
      </div>
      <div className="buttons">
        <Sidebarbutton title="Dashboard" link="" icon="fas fa-chart-bar" />
        <Sidebarbutton
          title="Appointments"
          link="appointments"
          icon="fas fa-calendar-check"
        />
        <Sidebarbutton title="Settings" link="settings" icon="fas fa-cogs" />
      </div>
    </div>
  );
}
