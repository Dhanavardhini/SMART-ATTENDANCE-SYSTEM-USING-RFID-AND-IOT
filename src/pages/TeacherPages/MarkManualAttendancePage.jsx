import React, { useState } from "react";
import { 
  Card, CardContent, Typography, TextField, Table, TableBody, TableCell, 
  TableContainer, TableHead, TableRow, Paper, MenuItem, Select, Button 
} from "@mui/material";
import "../../styles/MarkManualAttendance.css";
import TeacherNav from "./Teachernav";

const MarkManualAttendancePage = () => {
  // Mock student list (Replace with actual student data from API)
  const [students, setStudents] = useState([
    { id: 1, name: "Alice Green", attendance: "Present", status: "On Time" },
    { id: 2, name: "David Lee", attendance: "Absent", status: "Absent" },
    { id: 3, name: "Sophia Kim", attendance: "Present", status: "On Time" },
    { id: 4, name: "John Doe", attendance: "Late", status: "Late" },
  ]);

  // Search filter
  const [searchQuery, setSearchQuery] = useState("");

  // Function to update attendance and status
  const handleAttendanceChange = (id, newAttendance) => {
    const newStatus = newAttendance === "Present" ? "On Time" : newAttendance;
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id ? { ...student, attendance: newAttendance, status: newStatus } : student
      )
    );
  };

  // Function to save attendance (Example: send data to API)
  const handleSaveAttendance = () => {
    alert("Attendance has been updated successfully!");
    console.log("Updated Attendance Records:", students);
  };

  return (
    <>
      <TeacherNav />
      <div className="mark-manual-attendance-container">
        <Card className="mark-manual-attendance-card">
          <CardContent>
            <Typography variant="h4" className="mark-manual-attendance-title">
              Mark Manual Attendance
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
                    <TableCell>Status</TableCell> {/* New Status Column */}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {students
                    .filter((student) =>
                      student.name.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                    .map((student) => (
                      <TableRow key={student.id}>
                        <TableCell>{student.id}</TableCell>
                        <TableCell>{student.name}</TableCell>
                        <TableCell>
                          <Select
                            value={student.attendance}
                            onChange={(e) =>
                              handleAttendanceChange(student.id, e.target.value)
                            }
                            className="attendance-select"
                          >
                            <MenuItem value="Present">Present</MenuItem>
                            <MenuItem value="Absent">Absent</MenuItem>
                            <MenuItem value="Late">Late</MenuItem>
                          </Select>
                        </TableCell>
                        <TableCell>{student.status}</TableCell> {/* Displaying Status */}
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>

            {/* Save Button */}
            <Button
              variant="contained"
              color="primary"
              className="save-button"
              onClick={handleSaveAttendance}
            >
              Save Attendance
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default MarkManualAttendancePage;
