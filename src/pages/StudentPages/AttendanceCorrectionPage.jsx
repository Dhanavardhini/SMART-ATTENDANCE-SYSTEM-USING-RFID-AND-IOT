import React, { useState } from "react";
import { Card, CardContent, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField, Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import StudentNav from "./StudentNav";
import "../../styles/AttendanceCorrection.css";

const AttendanceCorrectionPage = () => {
  const [attendanceRecords] = useState([
    { date: "2025-03-20", status: "Present" },
    { date: "2025-03-19", status: "Absent" },
    { date: "2025-03-18", status: "Present" },
    { date: "2025-03-17", status: "Late" },
    { date: "2025-03-16", status: "Present" },
    { date: "2025-03-15", status: "Absent" },
  ]);

  const [correctionRequests, setCorrectionRequests] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [reason, setReason] = useState("");
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleRequestCorrection = () => {
    if (!selectedDate || !reason) {
      alert("Please select a date and provide a reason.");
      return;
    }

    const newRequest = { date: selectedDate, reason, status: "Pending Approval" };
    setCorrectionRequests([...correctionRequests, newRequest]);

    // Reset inputs
    setSelectedDate("");
    setReason("");
    setShowSnackbar(true);
  };

  return (
    <>
      <StudentNav />
      <div className="attendance-correction-container">
        <Card className="attendance-correction-card">
          <CardContent>
            <Typography variant="h4" className="correction-title">Attendance Correction Requests</Typography>

            {/* Attendance Records Table */}
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

            {/* Request Correction Form */}
            <div className="correction-form">
              <TextField
                label="Date (YYYY-MM-DD)"
                variant="outlined"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="correction-input"
              />
              <TextField
                label="Reason for Correction"
                variant="outlined"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="correction-input"
              />
              <Button variant="contained" color="primary" onClick={handleRequestCorrection} className="submit-button-1">
                Submit Request
              </Button>
            </div>

            {/* Correction Requests Table */}
            {correctionRequests.length > 0 && (
              <div className="correction-requests-section">
                <Typography variant="h5" className="requests-title">Submitted Requests</Typography>
                <TableContainer component={Paper} className="correction-table">
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Reason</TableCell>
                        <TableCell>Status</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {correctionRequests.map((request, index) => (
                        <TableRow key={index}>
                          <TableCell>{request.date}</TableCell>
                          <TableCell>{request.reason}</TableCell>
                          <TableCell>{request.status}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Snackbar Notification */}
        <Snackbar
          open={showSnackbar}
          autoHideDuration={3000}
          onClose={() => setShowSnackbar(false)}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <MuiAlert onClose={() => setShowSnackbar(false)} severity="success" variant="filled">
            ✅ Correction request submitted successfully!
          </MuiAlert>
        </Snackbar>
      </div>
    </>
  );
};

export default AttendanceCorrectionPage;
