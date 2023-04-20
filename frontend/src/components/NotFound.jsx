import React from "react";

const NotFound = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 text-center">
          <h1 className="display-4">404 - Page not found</h1>
          <p className="lead">
            The page you are looking for does not exist. Please check the URL
            and try again.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;