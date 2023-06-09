import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ loggedIn, LogOutClient }) => {
  const loggedOutLinks = () => {
    return (
      <ul>
        <li>
          <Link to="/">HomePage</Link>
        </li>
        <li>
          <Link to="/signup">SingUp</Link>
        </li>
        <li>
          <Link to="/login">Longin</Link>
        </li>
      </ul>
    );
  };

  const HandleLogout = (e) => {
    e.preventDefault();
    LogOutClient();
  };

  const loggedInLinks = () => {
    return (
      <ul>
        <li>
          <Link to="/">HomePage</Link>
        </li>
        <li>
          <Link to="/barbers">Barbers</Link>
        </li>
        <li>
          <a href="#" onClick={HandleLogout}>
            Logout
          </a>
        </li>
      </ul>
    );
  };
  return <div>{loggedIn ? loggedInLinks() : loggedOutLinks()}</div>;
};

export default Navbar;
