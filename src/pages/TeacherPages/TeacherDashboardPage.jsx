import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../../styles/TeacherDashboard.css";
import TeacherNav from "./Teachernav";

const TeacherDashboardPage = () => {
  const navigate = useNavigate();

  const teacherName = "Mr. John Smith";
  const assignedClass = "Class 10 - A";

  const [attendanceRecords, setAttendanceRecords] = useState([
    { name: "Alice Green", attendance: 80 },
    { name: "David Lee", attendance: 72 },
    { name: "Sophia Kim", attendance: 60 },
    { name: "John Doe", attendance: 65 },
  ]);

  const [searchQuery, setSearchQuery] = useState("");

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <>
      <TeacherNav />
      <div className="teacher-dashboard-container">
        <Card className="teacher-dashboard-card">
          <CardContent>
            <Typography variant="h4" className="teacher-dashboard-title">
              Teacher Dashboard
            </Typography>
            <Typography variant="h6" className="teacher-dashboard-teacher-info">
              Welcome, {teacherName}
            </Typography>
            <Typography variant="subtitle1" className="teacher-dashboard-class-info">
              Assigned Class: {assignedClass}
            </Typography>

            <TextField
              label="Search Student"
              variant="outlined"
              fullWidth
              className="teacher-dashboard-search-bar"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            <TableContainer component={Paper} className="teacher-dashboard-attendance-table">
              <Table className="teacher-dashboard-table">
                <TableHead>
                  <TableRow>
                    <TableCell>Student Name</TableCell>
                    <TableCell>Attendance (%)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {attendanceRecords
                    .filter((student) =>
                      student.name.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                    .map((student, index) => (
                      <TableRow key={index}>
                        <TableCell>{student.name}</TableCell>
                        <TableCell>{student.attendance}%</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>

            <div className="teacher-dashboard-button-container">
              <Button
                variant="contained"
                color="secondary"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default TeacherDashboardPage;
