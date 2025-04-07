
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

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const requestData = {
      name: formData.fullName,
      email: formData.email,
      subject: formData.subject,
      experience: formData.experience,
      password: formData.password,
    };

    try {
      const response = await fetch(
        "http://localhost/student_attendance_iot/controllers/api/user/post/teacherregister.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        }
      );

      const result = await response.json();

      if (response.ok) {
        alert(result.message);
        navigate("/teacher-login");
      } else {
        setError(result.error || "Registration failed. Please try again.");
      }
    } catch (error) {
      setError("Failed to connect to the server.");
    }
  };

  return (
    <div className="teacherregister-container">
      <Card className="teacherregister-card">
        <Typography variant="h5" className="teacherregister-title">
          Teacher Registration
        </Typography>

        {error && <Typography color="error">{error}</Typography>}

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

          {/* <div className="teacherform-group">
            <label className="teacherform-label">Enter Class Name</label>
            <input
              className="teacher-input"
              placeholder="Enter class"
              type="text"
              name="experience"
              required
              onChange={handleChange}
            />
          </div> */}

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
            Already registered?{" "}
            <span
              className="login-link"
              onClick={() => navigate("/teacher-login")}
            >
              Access your account
            </span>
          </Typography>
        </form>
      </Card>
    </div>
  );
}
