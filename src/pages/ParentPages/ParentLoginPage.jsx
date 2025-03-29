import React, { useState } from "react";
import { Button, Card, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../../styles/ParentLoginPage.css";

export default function ParentLoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validEmail = "parent@gmail.com";
    const validPassword = "parent123";

    if (formData.email === validEmail && formData.password === validPassword) {
      alert("Parent Login successful!");
      navigate("/parentdashboard");
    } else {
      alert("Insert the correct Email and Password");
    }
  };

  return (
    <div className="parentlogin-container">
      <Card className="parentlogin-card">
        <Typography variant="h5" className="parentlogin-title">
          Parent Login
        </Typography>

        <form onSubmit={handleSubmit} className="parentlogin-form">
          <div className="parentform-group">
            <label className="parentform-label">Email Id</label>
            <input
              className="parent-input-1"
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
              className="parent-input-2"
              placeholder="Enter Password"
              type="password"
              name="password"
              required
              onChange={handleChange}
            />
          </div>

          <Button type="submit" className="parentlogin-button" fullWidth>
            Login
          </Button>

          <Typography variant="body2" className="parent-register-text">
            Don't have an account?{" "}
            <span className="register-link" onClick={() => navigate("/parentregister")}>
              Register Here
            </span>
          </Typography>

        </form>
      </Card>
    </div>
  );
}
