import React from "react";
import "../../styles.scss";
import logo from "../../assets/health.svg";
import { useRouteMatch } from "react-router";
import { Link } from "react-router-dom";

export default function Footer() {
  let { path, url } = useRouteMatch();
  return (
    <div className="footer">
      <div className="footer-about">
        <div className="footer-logo">
          <img src={logo} alt="" width="50" height="50" />
          <span>DocNear</span>
        </div>
        <div className="footer-para">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            debitis perferendis hic quod,
          </p>
        </div>
      </div>
      <div className="footer-patient">
        <h3>For Patient</h3>
        <ul>
          <li>
            <i className="fa fa-angle-double-right"></i>
            <a href="/">Search for doctors</a>
          </li>
          <li>
            <i className="fa fa-angle-double-right"></i>
            <Link to={`${url}patient/register`}>Register</Link>
          </li>
          <li>
            <i className="fa fa-angle-double-right"></i>
            <Link to={`${url}signin`}>Login</Link>
          </li>
          <li>
            <i className="fa fa-angle-double-right"></i>
            <a href="">Patient dashboard</a>
          </li>
        </ul>
      </div>
      <div className="footer-doctor">
        <h3>For Doctors</h3>
        <ul>
          <li>
            <i className="fa fa-angle-double-right"></i>
            <a href="">Search for patients</a>
          </li>
          <li>
            <i className="fa fa-angle-double-right"></i>
            <Link to={`${url}doc/register`}>Register</Link>
          </li>
          <li>
            <i className="fa fa-angle-double-right"></i>
            <Link to={`${url}signin`}>Login</Link>
          </li>
          <li>
            <i className="fa fa-angle-double-right"></i>
            <Link to={`${url}doc/dashboard`}>Doctor dashboard</Link>
          </li>
        </ul>
      </div>
      <div className="footer-contact">
        <h3>Contact us by</h3>
        <ul>
          <li>
            <i className="fa fa-map-marked-alt"></i>
            <span>N32 Mohammed second street agadir</span>
          </li>
          <li>
            <i className="fa fa-mobile"></i>
            <span>05 45 76 89 32</span>
          </li>
          <li>
            <i className="fa fa-envelope"></i>
            <span>docnair@support.com</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
