import React, { useState } from "react";
import { Button, Card, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../../styles/ParentRegisterPage.css";

export default function ParentRegisterPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    alert("Parent Registration successful!");
    navigate("/parentlogin");
  };

  return (
    <div className="parentregister-container">
      <Card className="parentregister-card">
        <Typography variant="h5" className="parentregister-title">
          Parent Registration
        </Typography>

        <form onSubmit={handleSubmit} className="parentregister-form">
          <div className="parentform-group">
            <label className="parentform-label">Full Name</label>
            <input
              className="parent-input"
              placeholder="Enter Full Name"
              type="text"
              name="name"
              required
              onChange={handleChange}
            />
          </div>

          <div className="parentform-group">
            <label className="parentform-label">Email Id</label>
            <input
              className="parent-input"
              placeholder="Enter Email"
              type="email"
              name="email"
              required
              onChange={handleChange}
            />
          </div>

          <div className="parentform-group">
            <label className="parentform-label">Password</label>
            <input
              className="parent-input"
              placeholder="Enter Password"
              type="password"
              name="password"
              required
              onChange={handleChange}
            />
          </div>

          <div className="parentform-group">
            <label className="parentform-label">Confirm Password</label>
            <input
              className="parent-input"
              placeholder="Confirm Password"
              type="password"
              name="confirmPassword"
              required
              onChange={handleChange}
            />
          </div>

          <Button type="submit" className="parentregister-button" fullWidth>
            Register
          </Button>

          <Typography variant="body2" className="parent-login-text">
            Already have an account?{" "}
            <span className="login-link" onClick={() => navigate("/parent-login")}>
              Login Here
            </span>
          </Typography>
        </form>
      </Card>
    </div>
  );
}
