import React, { useState } from "react";
import { Button, Card, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../../styles/TeacherRegisterPage.css";

export default function TeacherRegisterPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    experience: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Teacher Registration Successful!");
    navigate("/teacherlogin"); // Redirect back to login page
  };

  return (
    <div className="teacherregister-container">
      <Card className="teacherregister-card">
        <Typography variant="h5" className="teacherregister-title">
          Teacher Registration
        </Typography>

        <form onSubmit={handleSubmit} className="teacherregister-form">
          <div className="teacherform-group">
            <label className="teacherform-label">Full Name</label>
            <input
              className="teacher-input"
              placeholder="Enter Full Name"
              type="text"
              name="fullName"
              required
              onChange={handleChange}
            />
          </div>

          <div className="teacherform-group">
            <label className="teacherform-label">Email</label>
            <input
              className="teacher-input"
              placeholder="Enter Email"
              type="email"
              name="email"
              required
              onChange={handleChange}
            />
          </div>

          <div className="teacherform-group">
            <label className="teacherform-label">Subject</label>
            <input
              className="teacher-input"
              placeholder="Enter Subject"
              type="text"
              name="subject"
              required
              onChange={handleChange}
            />
          </div>

          <div className="teacherform-group">
            <label className="teacherform-label">Years of Experience</label>
            <input
              className="teacher-input"
              placeholder="Enter Experience (e.g., 5 years)"
              type="text"
              name="experience"
              required
              onChange={handleChange}
            />
          </div>

          <div className="teacherform-group">
            <label className="teacherform-label">Password</label>
            <input
              className="teacher-input"
              placeholder="Enter Password"
              type="password"
              name="password"
              required
              onChange={handleChange}
            />
          </div>

          <Button type="submit" className="teacher-register-button" fullWidth>
            Register
          </Button>
          <Typography variant="body2" className="teacher-login-text">
            Registered already?{" "}
            <span className="login-link" onClick={() => navigate("/teacher-login")}>
                Access your account
            </span>
            </Typography>


        </form>
      </Card>
    </div>
  );
}
