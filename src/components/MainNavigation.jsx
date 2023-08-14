import React from "react";
import { NavLink } from "react-router-dom";
import "./MainNavigation.scss";

const MainNavigation = () => {

  return (
    <div className="navbar">
      <h2>EmployeeDetails</h2>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/Add-employee">Add Employee</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainNavigation;
