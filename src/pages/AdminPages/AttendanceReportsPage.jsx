import React, { useState } from "react";
import { Card, CardContent, Typography, Button, Select, MenuItem, FormControl, InputLabel, TextField } from "@mui/material";
import "../../styles/AttendanceReportsPage.css";
import AdNav from "./AdNav";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable"; 



const AttendanceReportsPage = () => {
  const availableClasses = ["Class 1", "Class 2", "Class 3"];
  const availableStudents = ["John Doe", "Alice Green", "David Lee", "Sophia Kim"];
  
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedStudent, setSelectedStudent] = useState("");
  const [reportData, setReportData] = useState([]);

  // ✅ Fixed: handleGenerateReport is outside handleDownloadReport
  const handleGenerateReport = () => {
    if (!selectedDate || !selectedClass || !selectedStudent) {
      alert("Please select a date, class, and student.");
      return;
    }
  
    // New report entry
    const newReport = {
      date: selectedDate,
      class: selectedClass,
      student: selectedStudent,
      status: "Present", // Modify this based on actual attendance data
    };
  
    // Append new data to the existing report instead of overwriting
    setReportData((prevData) => [...prevData, newReport]);
  };

  // ✅ Fixed: handleDownloadReport is now correctly closed
  const handleDownloadReport = () => {
    if (reportData.length === 0) {
      alert("No report generated yet!");
      return;
    }
  
    const doc = new jsPDF();
    doc.text("Attendance Report", 14, 15);
  
    // Define table headers and data
    const tableColumn = ["Date", "Class", "Student", "Status"];
    const tableRows = reportData.map(row => [row.date, row.class, row.student, row.status]);
  
    // ✅ Use autoTable correctly
    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 25,
    });
  
    // ✅ Save the PDF
    doc.save("Attendance_Report.pdf");
  };
  
  
  

  return (
    <>
    <AdNav/>
    <div className="attendance-reports-container">
      <Card className="attendance-card">
        <CardContent>
          <Typography variant="h5" className="title">Attendance Reports</Typography>

          <FormControl fullWidth className="form-control">
            <TextField type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
          </FormControl>

          <FormControl fullWidth className="form-control">
            <InputLabel>Select Class</InputLabel>
            <Select value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)} placeholder="select class" 
          label="Select Class">
              {availableClasses.map((cls) => (
                <MenuItem key={cls} value={cls}>{cls}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth className="form-control">
            <InputLabel>Select Student</InputLabel>
            <Select value={selectedStudent} onChange={(e) => setSelectedStudent(e.target.value)} placeholder="select Student" 
          label="Select Student">
              {availableStudents.map((student) => (
                <MenuItem key={student} value={student}>{student}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <div className="button-container-1">
            <Button className="generate-button" onClick={handleGenerateReport}>Generate Report</Button>
            <Button className="download-button" onClick={handleDownloadReport}>Download Report</Button>
          </div>

          {reportData.length > 0 && (
            <div className="report-table">
              <Typography variant="h6">Generated Report</Typography>
              <table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Class</th>
                    <th>Student</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {reportData.map((record, index) => (
                    <tr key={index}>
                      <td>{record.date}</td>
                      <td>{record.class}</td>
                      <td>{record.student}</td>
                      <td>{record.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
    </>
  );
};

export default AttendanceReportsPage;
