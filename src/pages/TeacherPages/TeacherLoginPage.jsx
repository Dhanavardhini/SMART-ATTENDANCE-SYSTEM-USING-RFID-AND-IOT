


import React, { useState } from "react";
import { Button, Card, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../../styles/TeacherLoginPage.css";

export default function TeacherLoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch(
        "http://localhost/student_attendance_iot/controllers/api/user/get/teacherlogin.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData), // Sends the email and password data
        }
      );
  
      const result = await response.json();
  
      if (response.ok) {
        alert("Login successful! Redirecting to your dashboard...");
        navigate("/mark-attendance"); // Navigate to teacher dashboard
      } else {
        setError(result.error || "Invalid email or password. Please check your credentials.");
      }
    } catch (error) {
      setError("Failed to connect to the server. Please try again later.");
    }
  };
  


  return (
    <div className="teacherlogin-container">
      <Card className="teacherlogin-card">
        <Typography variant="h5" className="teacherlogin-title">
          Teacher Login
        </Typography>

        {error && <Typography color="error">{error}</Typography>}

        <form onSubmit={handleSubmit} className="teacherlogin-form">
          <div className="teacherform-group">
            <label className="teacherform-label">Email</label>
            <input
              className="teacher-input-1"
              placeholder="Enter Email"
              type="email"
              name="email"
              required
              onChange={handleChange}
            />
          </div>

          <div className="teacherform-group">
            <label className="teacherform-label">Password</label>
            <input
              className="teacher-input-2"
              placeholder="Enter Password"
              type="password"
              name="password"
              required
              onChange={handleChange}
            />
          </div>

          <Button type="submit" className="teacherlogin-button" fullWidth>
            Login
          </Button>

          <Typography variant="body2" className="teacher-register-text">
            Don't have an account?{" "}
            <span
              className="register-link"
              onClick={() => navigate("/teacherregister")}
            >
              Register Here
            </span>
          </Typography>
        </form>
      </Card>
    </div>
  );
}
