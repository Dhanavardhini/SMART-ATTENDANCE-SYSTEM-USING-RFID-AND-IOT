import React, { useState } from "react";
import { 
  Card, CardContent, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, 
  Paper, Button, Snackbar, Alert 
} from "@mui/material";
import Chart from "react-apexcharts";
import "../../styles/StudentDashboard.css";
import StudentNav from "./StudentNav";
import { useNavigate } from "react-router-dom";

const StudentDashboardPage = () => {
  const [attendanceRecords] = useState([
    { date: "2025-03-20", status: "Present" },
    { date: "2025-03-19", status: "Absent" },
    { date: "2025-03-18", status: "Present" },
    { date: "2025-03-17", status: "Late" },
  ]);

  const totalClasses = attendanceRecords.length;
  const presentDays = attendanceRecords.filter((record) => record.status === "Present").length;
  const attendancePercentage = ((presentDays / totalClasses) * 100).toFixed(2);

  const chartOptions = {
    labels: ["Present", "Absent", "Late"],
  };
  const chartSeries = [
    presentDays,
    attendanceRecords.filter((r) => r.status === "Absent").length,
    attendanceRecords.filter((r) => r.status === "Late").length,
  ];
  
  const navigate = useNavigate();

  // State for Snackbar Alert
  const [openSnackbar, setOpenSnackbar] = useState(false);

  // Function to handle button click
  const handleCorrectionRequest = () => {
    setOpenSnackbar(true);
  };

  // Function to handle Snackbar close and navigate
  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
    setTimeout(() => {
      navigate("/correction-requests");
    }, 500); // Delay navigation slightly after closing Snackbar
  };

  return (
    <>
      <StudentNav />
      <div className="student-dashboard-container">
        <Card className="student-dashboard-card">
          <CardContent>
            <Typography variant="h4" className="dashboard-title">Student Dashboard</Typography>
            <Typography variant="h6" className="attendance-status">Overall Attendance: {attendancePercentage}%</Typography>

            {/* Attendance Chart */}
            <Chart options={chartOptions} series={chartSeries} type="pie" width="380" />

            {/* Attendance Table */}
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

            {/* Request Correction Button */}
            <Button 
              variant="contained" 
              color="primary" 
              className="request-correction"
              onClick={handleCorrectionRequest}
            >
              Request Attendance Correction
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Snackbar Alert Message */}
      <Snackbar 
        open={openSnackbar} 
        autoHideDuration={3000} 
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert onClose={handleSnackbarClose} severity="success" variant="filled">
          Attendance correction request submitted!
        </Alert>
      </Snackbar>
    </>
  );
};

export default StudentDashboardPage;
