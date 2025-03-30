import React, { useState } from "react";
import { Card, CardContent, Typography, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable"; // Import autoTable plugin
import "../../styles/GenerateReports.css"; // Import CSS
import TeacherNav from "./Teachernav";

const GenerateReportsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Mock attendance data (Replace with backend data)
  const attendanceRecords = [
    { id: 1, name: "Alice Green", attendance: 90 },
    { id: 2, name: "David Lee", attendance: 75 },
    { id: 3, name: "Sophia Kim", attendance: 60 },
    { id: 4, name: "John Doe", attendance: 85 },
  ];

  // Function to generate PDF report
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("Class Attendance Summary", 20, 10);
  
    // Table Headers
    const tableColumn = ["Student ID", "Student Name", "Attendance (%)"];
    const tableRows = [];
  
    // Add data to table
    attendanceRecords.forEach((record) => {
      tableRows.push([record.id, record.name, `${record.attendance}%`]);
    });
  
    // Use autoTable to generate table
    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 20,
    });
  
    // Save the PDF
    doc.save("Attendance_Report.pdf");
  };
  

  return (
    <>
      <TeacherNav/>
      <div className="generate-reports-container">
        <Card className="generate-reports-card">
          <CardContent>
            <Typography variant="h4" className="generate-reports-title">
              Generate Attendance Reports
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
                    <TableCell>Attendance (%)</TableCell>
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
                        <TableCell>{student.attendance}%</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>

            {/* Generate Report Button */}
            <Button
              variant="contained"
              color="primary"
              className="download-report-btn"
              onClick={generatePDF}
            >
              Download Report
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default GenerateReportsPage;
