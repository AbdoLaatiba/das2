import React from "react";
import { useRouteMatch } from "react-router";
import { Link } from "react-router-dom";

export default function Sidebarbutton({ title, link, icon }) {
  const handleClick = (e) => {
    document.querySelectorAll(".btn").forEach((ele) => {
      ele.style.borderLeft = "0px";
    });
    e.target.style.borderLeft = "8px solid white";
  };
  let { path } = useRouteMatch();
  return (
    <Link
      to={`${path}/${link}`}
      className="btn"
      onClick={(e) => handleClick(e)}
    >
      <i className={icon}></i>
      {title}
    </Link>
  );
}
