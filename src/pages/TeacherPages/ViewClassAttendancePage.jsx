import React, { useState } from "react";
import { Card, CardContent, Typography, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import "../../styles/ViewClassAttendance.css";
import TeacherNav from "./Teachernav";

const ViewClassAttendancePage = () => {
  // Mock student attendance data (Replace this with actual API data)
  const [attendanceRecords, setAttendanceRecords] = useState([
    { id: 1, name: "Alice Green", attendance: "Present" },
    { id: 2, name: "David Lee", attendance: "Absent" },
    { id: 3, name: "Sophia Kim", attendance: "Present" },
    { id: 4, name: "John Doe", attendance: "Late" },
  ]);

  // Search filter
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
    <TeacherNav/>
    <div className="view-class-attendance-container">
      <Card className="view-class-attendance-card">
        <CardContent>
          <Typography variant="h4" className="view-class-attendance-title">
            View Class Attendance
          </Typography>

          {/* Search Bar */}
          <TextField
            label="Search Student"
            variant="outlined"
            fullWidth
            className="search-bar"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          {/* Attendance Table */}
          <TableContainer component={Paper} className="attendance-table">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Student ID</TableCell>
                  <TableCell>Student Name</TableCell>
                  <TableCell>Attendance Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {attendanceRecords
                  .filter((student) =>
                    student.name.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                  .map((student) => (
                    <TableRow key={student.id}>
                      <TableCell>{student.id}</TableCell>
                      <TableCell>{student.name}</TableCell>
                      <TableCell>{student.attendance}</TableCell>
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

export default ViewClassAttendancePage;
