import React, { useState } from "react";
import {  Button, Card, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../../styles/AdminLoginPage.css";

export default function AdminLoginPage() {
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


    const validEmail = "admin@gmail.com";
    const validPassword = "admin123";

    if (formData.email === validEmail && formData.password === validPassword) {
      alert("Admin Login successful!");
      navigate("/addashboard");
    } else {
      alert("Insert the correct Email and Password");
    }
  };

  return (
    <div className="adminlogin-container">
      <Card className="adminlogin-card">
        <Typography variant="h5" className="adminlogin-title">
          Admin Login
        </Typography>

        <form onSubmit={handleSubmit} className="adminlogin-form">
          <div className="adminform-group">
            <label className="adminform-label" >Email Id</label>
            <input  className="admin-input-1"
              placeholder="Enter Email"
              type="email"
              name="email" required
              onChange={handleChange} />
          </div>

          <div className="adminform-group">
            <label className="adminform-label">Password</label>
            <input
              className="admin-input-2"
              placeholder="Enter Password"
              type="password"
              name="password"
              required
              onChange={handleChange}
            />
          </div>


          <Button type="submit" className="adminlogin-button" fullWidth>
            Login
          </Button>
        </form>
      </Card>
    </div>
  );
}
