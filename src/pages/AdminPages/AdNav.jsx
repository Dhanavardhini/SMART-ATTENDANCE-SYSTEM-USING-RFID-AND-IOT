import React from "react";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

// Icons
import NotificationsIcon from "@mui/icons-material/Notifications";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import ClassIcon from "@mui/icons-material/Class";
import GroupIcon from "@mui/icons-material/Group";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import DashboardIcon from "@mui/icons-material/Dashboard"; // Import Dashboard Icon

import "../../styles/AdminNavbar.css";  // ✅ Updated CSS file name

export default function AdNav() {
  const navigate = useNavigate();

  // Sidebar Items

const sidebarItems = [
  { icon: <DashboardIcon className="Admin-icon" />, text: "Dashboard", path: "/addashboard" },
  { icon: <GroupIcon className="Admin-icon" />, text: "Manage Users", path: "/manage-users" },
  { icon: <ClassIcon className="Admin-icon" />, text: "Manage Classes", path: "/manage-classes" },
  { icon: <FactCheckIcon className="Admin-icon" />, text: "Attendance Reports", path: "/attendance-records" },
  { icon: <NotificationsIcon className="Admin-icon" />, text: "Notifications & Alerts", path: "/notifications" },
];


  return (
    <div className="Admin-navbar">
      {/* Admin Panel Title */}
      <Typography variant="h4" className="Admin-quote">
      Empowering Learning
      </Typography>

      {/* Sidebar Sections */}
      <div className="Admin-nav-buttons">
        {sidebarItems.map((item, index) => (
          <div key={index} className="Admin-nav-item" onClick={() => navigate(item.path)}>
            {item.icon}
            <span>{item.text}</span>
          </div>
        ))}
      </div>

      {/* Logout (at the bottom) */}
      <div className="Admin-logout" onClick={() => { alert("You have been logged out."); navigate("/"); }}>
        <ExitToAppIcon className="Admin-icon" />
        <span>Logout</span>
      </div>
    </div>
  );
}
