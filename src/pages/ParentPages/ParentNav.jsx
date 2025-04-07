import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../../styles/ParentNav.css";

const ParentNav = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any authentication-related data if needed (e.g., localStorage)
    alert("You have successfully logged out. See you soon!");
    navigate("/");
  };

  return (
    <AppBar position="static" className="parent-nav">
      <Toolbar className="parent-toolbar">
        <Typography variant="h6" className="parent-title">Parent Portal</Typography>

        <div className="parent-nav-links">
          {/* <Button color="inherit" onClick={() => navigate("/parentdashboard")}></Button> */}
          <Button color="inherit" onClick={() => navigate("/attendance-alerts")}>Dashboard</Button>
          <Button color="inherit" onClick={() => navigate("/communication")}>Contact Admin</Button>
        </div>

        <Button color="inherit" className="logout-btn" onClick={handleLogout}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default ParentNav;
