import React, { useState } from "react";
import axios from "axios";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("BASE_URL/api/auth/login", {
        email,
        password,
      });
      // Handle successful login (e.g., save token, redirect to home page)
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <img src="" alt="image" />
          </div>
          <div className="col-xs-12 col-sm-6">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <div className="text-danger mb-3">{error}</div>}
            <button type="submit" className="btn btn-primary btn-block">
              Login
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
