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

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost/student_attendance_iot/controllers/api/user/get/parentlogin.php",
        {
          method: "POST", // Change to POST if required by backend
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Parent Login successful!");
        localStorage.setItem("parentToken", data.token); // Store token if backend provides one
        navigate("/attendance-alerts");
      } else {
        setError(data.message || "Invalid email or password");
      }
    } catch (error) {
      setError("Network error. Please try again later.");
    }
  };

  return (
    <div className="parentlogin-container">
      <Card className="parentlogin-card">
        <Typography variant="h5" className="parentlogin-title">
          Parent Login
        </Typography>

        {error && <Typography color="error">{error}</Typography>}

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
