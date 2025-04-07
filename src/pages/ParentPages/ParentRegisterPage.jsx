
import React, { useState } from "react";
import { Button, Card, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../../styles/ParentRegisterPage.css";

export default function ParentRegisterPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    id: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    const requestData = {
      name: formData.name,
      email: formData.email,
    id:formData.id,

      password: formData.password,
    };

    try {
      const response = await fetch(
        "http://localhost/student_attendance_iot/controllers/api/user/post/parentregister.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Parent Registration successful!");
        navigate("/parent-login");
      } else {
        setError(data.message || "Registration failed! Try again.");
      }
    } 
    catch (error) {
      setError("Network error. Please try again later.");
    }
  };

  return (
    <div className="parentregister-container">
      <Card className="parentregister-card">
        <Typography variant="h5" className="parentregister-title">
          Parent Registration
        </Typography>

        {error && <Typography color="error">{error}</Typography>}

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
            <label className="parentform-label">Student ID</label>
            <input
              className="parent-input"
              placeholder="Enter Student ID"
              type="text"
              name="id"
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
