import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Snackbar, Button } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import ParentNav from "./ParentNav";
import "../../styles/ParentDashboard.css";

const ParentDashboardPage = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const [attendanceRecords] = useState([
    { date: "2025-03-20", status: "Present" },
    { date: "2025-03-19", status: "Absent" },
    { date: "2025-03-18", status: "Present" },
    { date: "2025-03-17", status: "Late" },
    { date: "2025-03-16", status: "Present" },
    { date: "2025-03-15", status: "Absent" },
  ]);

  const totalClasses = attendanceRecords.length;
  const presentDays = attendanceRecords.filter((record) => record.status === "Present").length;
  const attendancePercentage = ((presentDays / totalClasses) * 100).toFixed(2);

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    if (attendancePercentage < 50) {
      setAlertMessage("⚠️ Urgent: Your child's attendance is below 50%! Please take immediate action.");
      setShowAlert(true);
    } else if (attendancePercentage < 75) {
      setAlertMessage("⚠️ Warning: Your child's attendance is below 75%. Please monitor carefully.");
      setShowAlert(true);
    }
  }, [attendancePercentage]);

  return (
    <>
      <ParentNav />
      <div className="parent-dashboard-container">
        <Card className="parent-dashboard-card">
          <CardContent>
            <Typography variant="h4" className="dashboard-title">Parent Dashboard</Typography>
            <Typography variant="h6" className="attendance-status">
              Child's Attendance: {attendancePercentage}%
            </Typography>

            <TableContainer component={Paper} className="attendance-table">
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {attendanceRecords.map((record, index) => (
                    <TableRow key={index}>
                      <TableCell>{record.date}</TableCell>
                      <TableCell>{record.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            {/* Contact Admin Button */}
            <Button 
              variant="contained" 
              color="primary" 
              className="contact-admin-btn" 
              onClick={() => navigate("/communication")} // Navigate on click
            >
              Contact Admin
            </Button>
          </CardContent>
        </Card>

        <Snackbar
          open={showAlert}
          autoHideDuration={6000}
          onClose={() => setShowAlert(false)}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <MuiAlert onClose={() => setShowAlert(false)} severity="warning" variant="filled">
            {alertMessage}
          </MuiAlert>
        </Snackbar>
      </div>
    </>
  );
};

export default ParentDashboardPage;
