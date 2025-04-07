
import React, { useState } from "react";
import axios from "axios";
import { Button, Card, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../../styles/StudentLoginPage.css";

export default function StudentLoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost/student_attendance_iot/controllers/api/user/get/studentlogin.php",
        JSON.stringify(formData),
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.data.success) {
        alert("Student Login successful!");
        navigate("/studentdashboard");
      } else {
        alert(response.data.message || "Invalid email or password");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while logging in.");
    }
  };

  return (
    <div className="studentlogin-container">
      <Card className="studentlogin-card">
        <Typography variant="h5" className="studentlogin-title">
          Student Login
        </Typography>

        <form onSubmit={handleSubmit} className="studentlogin-form">
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

          <Button type="submit" className="studentlogin-button" fullWidth>
            Login
          </Button>

          <Typography variant="body2" className="student-register-text">
            Don't have an account?{" "}
            <span
              className="register-link"
              onClick={() => navigate("/studentregister")}
            >
              Register Here
            </span>
          </Typography>
        </form>
      </Card>
    </div>
  );
}
