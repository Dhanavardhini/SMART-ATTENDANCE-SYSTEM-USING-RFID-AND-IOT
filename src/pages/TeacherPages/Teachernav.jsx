import React from "react";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

// Icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import NotificationsIcon from "@mui/icons-material/Notifications";
import GroupIcon from "@mui/icons-material/Group";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

import "../../styles/Teacher-nav.css"; 

export default function TeacherNav() {
  const navigate = useNavigate();

  const sidebarItems = [
    // { icon: <DashboardIcon className="teacher-icon" />, text: "Teacher Dashboard", path: "/teacherdashboard" },
    { icon: <FactCheckIcon className="teacher-icon" />, text: "Manual Attendance", path: "/mark-attendance" },
    { icon: <GroupIcon className="teacher-icon" />, text: "Class Attendance", path: "/view-attendance" },

    { icon: <NotificationsIcon className="teacher-icon" />, text: "Notify Students", path: "/send-notifications" },
    { icon: <FactCheckIcon className="teacher-icon" />, text: "Attendance Reports", path: "/generate-reports" },
  ];

  return (
    <div className="teacher-nav">
      <Typography variant="h4" className="teacher-quote">
        Teacher Panel
      </Typography>

      <div className="teacher-nav-buttons">
        {sidebarItems.map((item, index) => (
          <div key={index} className="teacher-nav-item" onClick={() => navigate(item.path)}>
            {item.icon}
            <span>{item.text}</span>
          </div>
        ))}
      </div>

      <div className="teacher-logout" onClick={() => { alert("You have been logged out."); navigate("/"); }}>
        <ExitToAppIcon className="teacher-icon" />
        <span>Logout</span>
      </div>
    </div>
  );
}