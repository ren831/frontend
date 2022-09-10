import React, { useState } from "react";
import { baseUrl, headers } from "./Globals";

const Login = ({ loginClient }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const strongParams = {
      username,
      password,
    };

    fetch(baseUrl + "/login", {
      method: "POST",
      headers,
      body: JSON.stringify(strongParams),
    })
      .then((r) => r.json())
      .then((data) => {
        loginClient(data.client);
        localStorage.setItem("jwt", data.token);
      });
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
