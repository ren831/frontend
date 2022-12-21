import React, { useState, useEffect } from "react";
import Navbar from "./components/static/Navigation/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/static/Authentication/Signup";
import Login from "./components/static/Authentication/Login";
import Home from "./components/static/Home";
import {
  baseUrl,
  headers,
  getToken,
} from "./components/static/Authentication/Globals";
import BarberCard from "./components/BarberCard";

const App = () => {
  const [currentClient, setCurrentClient] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  const loginClient = (client) => {
    setCurrentClient(client);
    setLoggedIn(true);
  };

  const LogOutClient = () => {
    setCurrentClient({});
    setLoggedIn(false);
    localStorage.removeItem("jwt");
  };

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token && !loggedIn) {
      fetch(baseUrl + "/get-current-client", {
        method: "GET",
        headers: {
          ...headers,
          ...getToken(),
        },
      })
        .then((r) => r.json())
        .then((client) => loginClient(client));
    }
  }, []);

  return (
    <Router>
      <Navbar loggedIn={loggedIn} LogOutClient={LogOutClient} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup loginClient={loginClient} />} />
        <Route path="/login" element={<Login loginClient={loginClient} />} />
      </Routes>
    </Router>
  );
};

export default App;
