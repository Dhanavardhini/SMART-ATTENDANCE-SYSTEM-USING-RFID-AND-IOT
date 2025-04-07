
import React, { useState } from "react";
import axios from "axios";
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

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
  
    try {
      const response = await axios.post(
        "http://localhost/student_attendance_iot/controllers/api/user/post/studentregister.php",
        JSON.stringify({
          name: formData.fullName, // Changed from fullName to name
          email: formData.email,
          password: formData.password,
        }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
  
      if (response.data.success) {
        alert("Student Registered Successfully!");
        navigate("/student-login");
      } else {
        alert(response.data.message || "Registration Failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while registering.");
    }
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
  <select
    className="student-input"
    name="class"
    required
    onChange={handleChange}
    defaultValue=""
  >
    <option value="" disabled>Select Class</option>
    <option value="10A">10A</option>
    <option value="10B">10B</option>
    <option value="11A">11A</option>
    <option value="11B">11B</option>
    <option value="12A">12A</option>
    <option value="12B">12B</option>
  </select>
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
