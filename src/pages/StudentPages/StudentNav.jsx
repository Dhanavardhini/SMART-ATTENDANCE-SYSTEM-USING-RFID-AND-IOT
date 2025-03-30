import React, { useState } from "react";
import { Snackbar, Typography, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";

// Icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import HistoryIcon from "@mui/icons-material/History";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import RequestPageIcon from "@mui/icons-material/RequestPage";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

import "../../styles/StudentNav.css"; 

export default function StudentNav() {
  const navigate = useNavigate();
  const [logoutSnackbar, setLogoutSnackbar] = useState(false);

  const menuItems = [
    { icon: <DashboardIcon className="student-icon" />, text: "Dashboard", path: "/studentdashboard" },
    { icon: <HistoryIcon className="student-icon" />, text: "Attendance History", path: "/attendance-history" },
    { icon: <NotificationsActiveIcon className="student-icon" />, text: "Notifications", path: "/student-notifications" },
    { icon: <RequestPageIcon className="student-icon" />, text: "Correction Requests", path: "/correction-requests" },
  ];

  const handleLogout = () => {
    console.log("🔹 Logout clicked, opening Snackbar...");
    setLogoutSnackbar(true);

    setTimeout(() => {
      console.log("🔹 Navigating to home page...");
      navigate("/");
    }, 2000);
  };

  return (
    <>
      <div className="student-nav">
        <Typography variant="h4" className="student-title">Student Portal</Typography>

        <div className="student-nav-menu">
          {menuItems.map((item, index) => (
            <div key={index} className="student-nav-item" onClick={() => navigate(item.path)}>
              {item.icon}
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        {/* Logout Button */}
        <div className="student-logout" onClick={handleLogout}>
          <ExitToAppIcon className="student-icon" />
          <span>Logout</span>
        </div>
      </div>

      {/* Snackbar Notification */}
      <Snackbar 
        open={logoutSnackbar} 
        autoHideDuration={2000} 
        onClose={() => setLogoutSnackbar(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert severity="info" variant="filled" onClose={() => setLogoutSnackbar(false)}>
          Logged out successfully!
        </Alert>
      </Snackbar>
    </>
  );
}
