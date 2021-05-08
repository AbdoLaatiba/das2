import React from "react";
import { Link } from "react-router-dom";
import "./admin.scss";
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
          title="Doctors"
          link="doctors"
          icon="fas fa-stethoscope"
        />
        <Sidebarbutton
          title="Patients"
          link="patients"
          icon="fas fa-procedures"
        />
        <Sidebarbutton
          title="Appointments"
          link="appointments"
          icon="fas fa-calendar-check"
        />
        <Sidebarbutton
          title="Administrators"
          link="administrators"
          icon="fas fa-user-tie"
        />
        <Sidebarbutton title="Settings" link="settings" icon="fas fa-cogs" />
      </div>
    </div>
  );
}
