import React, { useState } from "react";
import { Button, Card, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../../styles/StudentRegistrationPage.css";

export default function StudentRegistrationPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    studentID: "",
    class: "",
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
    alert("Student Registered Successfully!");
    navigate("/studentlogin");
  };

  return (
    <div className="studentregister-container">
      <Card className="studentregister-card">
        <Typography variant="h5" className="studentregister-title">
          Student Registration
        </Typography>

        <form onSubmit={handleSubmit} className="studentregister-form">
          <div className="studentform-group">
            <label className="studentform-label">Full Name</label>
            <input
              className="student-input"
              placeholder="Enter Full Name"
              type="text"
              name="fullName"
              required
              onChange={handleChange}
            />
          </div>

          <div className="studentform-group">
            <label className="studentform-label">Email Id</label>
            <input
              className="student-input"
              placeholder="Enter Email"
              type="email"
              name="email"
              required
              onChange={handleChange}
            />
          </div>

          <div className="studentform-group">
            <label className="studentform-label">Student ID</label>
            <input
              className="student-input"
              placeholder="Enter Student ID"
              type="text"
              name="studentID"
              required
              onChange={handleChange}
            />
          </div>

          <div className="studentform-group">
            <label className="studentform-label">Class</label>
            <input
              className="student-input"
              placeholder="Enter Class (e.g., 10A, 12B)"
              type="text"
              name="class"
              required
              onChange={handleChange}
            />
          </div>

          <div className="studentform-group">
            <label className="studentform-label">Password</label>
            <input
              className="student-input"
              placeholder="Enter Password"
              type="password"
              name="password"
              required
              onChange={handleChange}
            />
          </div>

          <div className="studentform-group">
            <label className="studentform-label">Confirm Password</label>
            <input
              className="student-input"
              placeholder="Confirm Password"
              type="password"
              name="confirmPassword"
              required
              onChange={handleChange}
            />
          </div>

          <Button type="submit" className="studentregister-button" fullWidth>
            Register
          </Button>
        </form>

        <Typography variant="body2" className="student-login-text">
          Already registered?{" "}
          <span className="login-link" onClick={() => navigate("/student-login")}>
            Access your account
          </span>
        </Typography>
      </Card>
    </div>
  );
}
