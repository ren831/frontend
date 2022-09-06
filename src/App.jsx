import React, { useState, useEffect } from "react";
import Navbar from "./components/static/Navigation/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/static/Authentication/Signup";
import Login from "./components/static/Authentication/Login";
import Home from "./components/static/Home";

const App = () => {
  const [currentClient, setCurrentClient] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  const loginClient = (client) => {
    setCurrentClient(client);
    setLoggedIn(true);
  };

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token && !loggedIn) {
      setLoggedIn(true);
    }
  }, []);

  return (
    <Router>
      {loggedIn ? <h1>Hey youre loggedIn!</h1> : null}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup loginClient={loginClient} />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
