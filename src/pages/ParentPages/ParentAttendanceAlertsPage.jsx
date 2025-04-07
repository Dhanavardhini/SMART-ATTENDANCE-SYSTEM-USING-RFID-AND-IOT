import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import ParentNav from "./ParentNav";
import "../../styles/ParentAttendanceAlerts.css";

const ParentAttendanceAlertsPage = () => {
  const [attendanceRecords] = useState([
    { date: "2025-03-20", status: "Present" },
    { date: "2025-03-19", status: "Absent" },
    { date: "2025-03-18", status: "Present" },
    { date: "2025-03-17", status: "Late" },
    { date: "2025-03-16", status: "Present" },
    { date: "2025-03-16", status: "Present" },
    { date: "2025-03-15", status: "Absent" },
  ]);

  const totalClasses = attendanceRecords.length;
  const presentDays = attendanceRecords.filter((record) => record.status === "Present").length;
  const attendancePercentage = ((presentDays / totalClasses) * 100).toFixed(2);

  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState("info");

  useEffect(() => {
    if (attendancePercentage < 50) {
      setAlertMessage("⚠️ Urgent: Your child's attendance is below 50%! Immediate action required.");
      setAlertSeverity("error");
      setShowAlert(true);
    } else if (attendancePercentage < 75) {
      setAlertMessage("⚠️ Warning: Your child's attendance is below 75%. Please monitor carefully.");
      setAlertSeverity("warning");
      setShowAlert(true);
    } else {
      setAlertMessage("✅ Great! Your child's attendance is above 75%. Keep it up!");
      setAlertSeverity("success");
      setShowAlert(true);
    }
  }, [attendancePercentage]);

  return (
    <>
      <ParentNav />
      <div className="attendance-alerts-container">
        <Card className="attendance-alerts-card">
          <CardContent>
            <Typography variant="h4" className="alert-title">Attendance Alerts</Typography>
            <Typography variant="h6" className="attendance-status">
              Child's Attendance: {attendancePercentage}%
            </Typography>
            <Typography className="alert-message">{alertMessage}</Typography>
          </CardContent>
        </Card>

        <Snackbar
          open={showAlert}
          autoHideDuration={6000}
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

export default ParentAttendanceAlertsPage;
