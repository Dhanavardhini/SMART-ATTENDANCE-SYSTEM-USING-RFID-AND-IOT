import React, { useState } from "react";
import { Card, CardContent, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import Chart from "react-apexcharts";
import StudentNav from "./StudentNav"; 
import "../../styles/AttendanceHistory.css"; 

const AttendanceHistoryPage= () => {
  // Sample attendance data
  const [attendanceRecords] = useState([
    { date: "2025-03-20", status: "Present" },
    { date: "2025-03-19", status: "Absent" },
    { date: "2025-03-18", status: "Present" },
    { date: "2025-03-17", status: "Late" },
    { date: "2025-03-16", status: "Present" },
    { date: "2025-03-15", status: "Absent" },
  ]);

  // Attendance statistics
  const totalClasses = attendanceRecords.length;
  const presentDays = attendanceRecords.filter((record) => record.status === "Present").length;
  const absentDays = attendanceRecords.filter((record) => record.status === "Absent").length;
  const lateDays = attendanceRecords.filter((record) => record.status === "Late").length;
  const attendancePercentage = ((presentDays / totalClasses) * 100).toFixed(2);

  // Chart Configuration
  const chartOptions = {
    chart: { type: "pie" },
    labels: ["Present", "Absent", "Late"],
    colors: ["#2ecc71", "#e74c3c", "#f39c12"],
  };

  const chartSeries = [presentDays, absentDays, lateDays];

  return (
    <>
      <StudentNav />
      <div className="attendance-history-container">
        <Card className="attendance-history-card">
          <CardContent>
            <Typography variant="h4" className="history-title">Attendance History</Typography>
            <Typography variant="h6" className="attendance-percentage">
              Overall Attendance: {attendancePercentage}%
            </Typography>

            {/* Attendance Chart */}
            <div className="chart-container">
              <Chart options={chartOptions} series={chartSeries} type="pie" width="380" />
            </div>

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
                    <TableRow key={index} className={`status-${record.status.toLowerCase()}`}>
                      <TableCell>{record.date}</TableCell>
                      <TableCell>{record.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default AttendanceHistoryPage;
