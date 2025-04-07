import React, { useState } from "react";
import { Card, CardContent, Typography, Button, FormControl, InputLabel, Select, MenuItem, Snackbar, Alert } from "@mui/material";
import "../../styles/Notifications.css";
import AdNav from "./AdNav";

const Notifications = () => {
  const [selectedStudent, setSelectedStudent] = useState("");
  const [attendanceRecords, setAttendanceRecords] = useState({
    "John Doe": 65,
    "Alice Green": 80,
    "David Lee": 72,
    "Sophia Kim": 60
  });

  const [threshold, setThreshold] = useState(null);z // ✅ Default to None
  const [alertMessage, setAlertMessage] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const students = Object.keys(attendanceRecords);

  const checkAttendance = () => {
    if (!selectedStudent) {
      setAlertMessage("Please select a student.");
      setOpenSnackbar(true);
      return;
    }

    if (threshold === null) {
      setAlertMessage("Please set a minimum attendance threshold.");
      setOpenSnackbar(true);
      return;
    }

    const attendance = attendanceRecords[selectedStudent];
    if (attendance < threshold) {
      setAlertMessage(`${selectedStudent} has low attendance (${attendance}%). Notification sent to parents.`);
    } else {
      setAlertMessage(`${selectedStudent} has sufficient attendance (${attendance}%).`);
    }
    setOpenSnackbar(true);
  };

  return (
    <>
      <AdNav />
      <div className="notifications-container">
        <Card className="notification-card">
          <CardContent>
            <Typography variant="h5" className="title">Attendance Notifications</Typography>

            <FormControl fullWidth className="form-control">
              <InputLabel>Select Student</InputLabel>
              <Select value={selectedStudent} onChange={(e) => setSelectedStudent(e.target.value)} label="Select Student">
                {students.map((student) => (
                  <MenuItem key={student} value={student}>{student}</MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth className="form-control">
              <InputLabel>Set Minimum Attendance (%)</InputLabel>
              <Select
                value={threshold} label="Set Minimum Attendance (%)"
                onChange={(e) => setThreshold(e.target.value)}
              >
                <MenuItem value={50}>50%</MenuItem>
                <MenuItem value={60}>60%</MenuItem>
                <MenuItem value={70}>70%</MenuItem>
                <MenuItem value={75}>75%</MenuItem>
                <MenuItem value={80}>80%</MenuItem>
              </Select>
            </FormControl>

            <div className="button-container">
              <Button className="check-button" onClick={checkAttendance}>Check Attendance</Button>
            </div>
          </CardContent>
        </Card>

        {/* Snackbar positioned to the right */}
        <Snackbar 
          open={openSnackbar} 
          autoHideDuration={4000} 
          onClose={() => setOpenSnackbar(false)}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }} // ✅ Positions it on the right
        >
          <Alert onClose={() => setOpenSnackbar(false)} severity="warning">{alertMessage}</Alert>
        </Snackbar>
      </div>
    </>
  );
};

export default Notifications;
