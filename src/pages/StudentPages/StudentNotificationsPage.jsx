import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import StudentNav from "./StudentNav";
import "../../styles/StudentNotifications.css";

const StudentNotificationsPage = () => {
  // Sample attendance data
  const [attendanceRecords] = useState([
    { date: "2025-03-20", status: "Preset" },
    { date: "2025-03-19", status: "Absent" },
    { date: "2025-03-18", status: "Present" },
    { date: "2025-03-17", status: "Late" },
    { date: "2025-03-16", status: "Present" },
    { date: "2025-03-15", status: "Absent" },
  ]);

  // Calculate attendance percentage
  const totalClasses = attendanceRecords.length;
  const presentDays = attendanceRecords.filter((record) => record.status === "Present").length;
  const attendancePercentage = ((presentDays / totalClasses) * 100).toFixed(2);

  // Notification state
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("info");

  useEffect(() => {
    if (attendancePercentage < 50) {
      setAlertMessage(" Critical! Your attendance is below 50%. Immediate action required!");
      setAlertSeverity("error");
      setShowAlert(true);
    } else if (attendancePercentage < 75) {
      setAlertMessage(" Warning! Your attendance is below 75%. Improve attendance!");
      setAlertSeverity("warning");
      setShowAlert(true);
    } else {
      setAlertMessage(" Good! Your attendance is above 75%. Keep it up!");
      setAlertSeverity("success");
      setShowAlert(true);
    }
  }, [attendancePercentage]);

  return (
    <>
      <StudentNav />
      <div className="student-notifications-container">
        <Card className="student-notifications-card">
          <CardContent>
            <Typography variant="h4" className="notification-title">Notifications</Typography>
            <Typography variant="h6" className="attendance-warning">
              Attendance Status: {attendancePercentage}%
            </Typography>
          </CardContent>
        </Card>

        {/* Notification Snackbar */}
        <Snackbar
          open={showAlert}
          autoHideDuration={5000}
          onClose={() => setShowAlert(false)}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <MuiAlert onClose={() => setShowAlert(false)} severity={alertSeverity} variant="filled">
            {alertMessage}
          </MuiAlert>
        </Snackbar>
      </div>
    </>
  );
};

export default StudentNotificationsPage;
