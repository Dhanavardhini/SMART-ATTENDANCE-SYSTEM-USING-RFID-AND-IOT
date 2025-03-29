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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validEmail = "teacher@gmail.com";
    const validPassword = "teacher123";

    if (formData.email === validEmail && formData.password === validPassword) {
      alert("Teacher Login successful!");
      navigate("/teacherdashboard");
    } else {
      alert("Insert the correct Email and Password");
    }
  };

  return (
    <div className="teacherlogin-container">
      <Card className="teacherlogin-card">
        <Typography variant="h5" className="teacherlogin-title">
          Teacher Login
        </Typography>

        <form onSubmit={handleSubmit} className="teacherlogin-form">
          <div className="teacherform-group">
            <label className="teacherform-label">Email Id</label>
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

          {/* Register Here text */}
          <Typography variant="body2" className="teacher-register-text">
            Don't have an account?{" "}
            <span className="register-link" onClick={() => navigate("/teacherregister")}>
              Register Here
            </span>
          </Typography>

        </form>
      </Card>
    </div>
  );
}
