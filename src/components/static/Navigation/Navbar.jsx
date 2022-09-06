import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
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
    </div>
  );
};

export default Navbar;
