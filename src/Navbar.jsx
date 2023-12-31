import React from 'react';
import { NavLink } from 'react-router-dom';
function Navbar() {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
                <h1 className="navbar-brand" >
                  React
                </h1>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto  mb-2 mb-lg-0 ">
                    <li className="nav-item mx-2">
                      <NavLink  className="nav-link " aria-current="page"  to={"/"}>
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item mx-2">
                      <NavLink  className="nav-link"  to={"/service"}>
                        Services
                      </NavLink>
                    </li>
                    <li className="nav-item mx-2">
                      <NavLink  className="nav-link"   to={"/contact"}>
                        Contact
                      </NavLink>
                    </li>
                    <li className="nav-item mx-2">
                      <NavLink  className="nav-link"   to={"/about"}>
                        About
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>

  );
}

export default Navbar;
