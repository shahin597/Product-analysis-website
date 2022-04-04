import React from "react";
import './Header.css';
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="container-full header">
      <div className="container  ">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <Link className="navbar-brand nav-link fs-4 text-dark logo" to="/eduma">
              Shahin's skillshare platform
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) => (isActive ? "active-link" : "link" )}
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({ isActive }) => (isActive ? "active-link" : "link" )} to="/reviews">
                    Reviews
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({ isActive }) => (isActive ? "active-link" : "link" )} to="/blogs">
                    Blogs
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({ isActive }) => (isActive ? "active-link" : "link" )} to="/dashboard">
                    Dashboard
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({ isActive }) => (isActive ? "active-link" : "link" )} to="/about">
                  {/* "nav-link active fs-5 ms-4" */}
                    About-Us
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
