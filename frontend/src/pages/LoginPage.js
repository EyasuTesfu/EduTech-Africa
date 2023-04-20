import React from "react";
import Login from "../components/Login";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const LoginPage = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-6">
          <h2 className="text-center mb-4">Login</h2>
          <Login />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
