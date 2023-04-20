import React, { useState } from "react";
import { Row, Col, Form, Button, Image } from "react-bootstrap";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);

      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Redirect to the dashboard or home page
      } else {
        setError(data.message);
      }

      setLoading(false);
    } catch (error) {
      console.error(error);
      setError("An error occurred while logging in. Please try again later.");
      setLoading(false);
    }
  };

  return (
    <>
      <Row>
        <Col lg={6}>
          <Image
            src={process.env.PUBLIC_URL + "assets/img/hero-img-2.png"}
            thumbnail
            style={{ border: "none", marginLeft: "10%", marginTop: "10%" }}
          />
        </Col>
        <Col lg={6} style={{ marginTop: "10%" }}>
          <h1>
            <a href="index.html" style={{ textDecoration: "none" }}>
              <span
                style={{
                  color: "#444444",
                  fontWeight: "bold",
                  fontSize: "2rem",
                }}
              >
                EduTech
              </span>{" "}
              <span
                style={{
                  color: "#007BFF",
                  fontWeight: "bold",
                  fontSize: "2rem",
                }}
              >
                Africa
              </span>
            </a>
          </h1>

          <Form
            style={{
              width: "80%",
              marginRight: "10%",
            }}
            onSubmit={handleSubmit}
          >
            <Form.Group>
              <Form.Label>Enter your email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Enter your password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <br></br>
            <Button type="submit" disabled={loading}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default LoginForm;
