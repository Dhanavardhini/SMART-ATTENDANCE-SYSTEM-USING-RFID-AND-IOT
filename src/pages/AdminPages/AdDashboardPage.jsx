import React, { useEffect, useRef } from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import "../../styles/AdminDashboardPage.css";
import AdNav from "../../pages/AdminPages/AdNav"; 

const AdminDashboardPage = () => {
  const totalStudents = 500;
  const presentCount = 450;
  const absentCount = totalStudents - presentCount;
  const chartRef = useRef(null);

  const attendanceData = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    datasets: [
      {
        label: "Attendance",
        data: [95, 90, 88, 92, 85],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
    ],
  };

  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <AdNav /> {/* Sidebar */}
      <div className="Admindashboard-container">
        <Grid container spacing={16}>
          <Grid item xs={12} sm={4}>
            <Card className="Admindashboard-card">
              <CardContent>
                <Typography variant="h6">Total Students</Typography>
                <Typography variant="h4">{totalStudents}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card className="Admindashboard-card Admin-present">
              <CardContent>
                <Typography variant="h6">Present Students</Typography>
                <Typography variant="h4">{presentCount}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card className="Admindashboard-card Admin-absent">
              <CardContent>
                <Typography variant="h6">Absent Students</Typography>
                <Typography variant="h4">{absentCount}</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <div className="Admin-chart-container">
          <Bar ref={chartRef} data={attendanceData} />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
