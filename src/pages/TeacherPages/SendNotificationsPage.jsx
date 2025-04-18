import React, { useState } from "react";
import { 
  Card, CardContent, Typography, Table, TableBody, TableCell, 
  TableContainer, TableHead, TableRow, Paper, Button, Checkbox 
} from "@mui/material";
import "../../styles/SendNotifications.css";
import TeacherNav from "./Teachernav";

const SendNotificationsPage = () => {
  // Mock student attendance data
  const [students, setStudents] = useState([
    { id: 1, name: "Alice Green", attendance: 60, notify: false },
    { id: 2, name: "David Lee", attendance: 72, notify: false },
    { id: 3, name: "Sophia Kim", attendance: 50, notify: false },
    { id: 4, name: "John Doe", attendance: 80, notify: false },
  ]);


  // Function to toggle notification selection
  const handleCheckboxChange = (id) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id ? { ...student, notify: !student.notify } : student
      )
    );
  };

  const [students1, setStudent] = useState([
    { id: 1, name: "Alice Green", queries:  "Alice's attendance is critically low. Immediate action required!" },
    { id: 2, name: "David Lee", queries:  "Alice's attendance is critically low. Immediate action required!", },
    { id: 3, name: "Sophia Kim", queries:  "Alice's attendance is critically low. Immediate action required!", },
    { id: 4, name: "John Doe", queries: "Alice's attendance is critically low. Immediate action required!",},
  ]);

  
  // Function to toggle notification selection
  // const handleCheckboxChange1 = (id) => {
  //   setStudent((prevStudents) =>
  //     prevStudents.map((students) =>
  //       students.id === id ? { ...students, notify: !students.notify } : students
  //     )
  //   );
  // };


  // Function to send notifications
  const handleSendNotifications = () => {
    const selectedStudents = students.filter((student) => student.notify);
    
    if (selectedStudents.length === 0) {
      alert("No students selected for notification.");
      return;
    }

    // Mock notification message
    alert(`Notifications sent to: ${selectedStudents.map(s => s.name).join(", ")}`);
    console.log("Notifications sent to:", selectedStudents);
  };

  return (
    <>
      <TeacherNav />
      <div className="send-notifications-container">
        <Card className="send-notifications-card">
          <CardContent>
            <Typography variant="h4" className="send-notifications-title">
              Send Notifications to Students
            </Typography>

            {/* Attendance Table */}
            <TableContainer component={Paper} className="notifications-table">
              <Table>
              <TableHead>
                    <TableRow>
                        <TableCell>Select</TableCell>
                        <TableCell>Student Name</TableCell>
                        <TableCell>Attendance (%)</TableCell>
                    </TableRow>
                    </TableHead>

                <TableBody>
                  {students
                    .filter((student) => student.attendance < 75) // Filter irregular attendance
                    .map((student) => (
                      <TableRow key={student.id}>
                        <TableCell>
                          <Checkbox
                            checked={student.notify}
                            onChange={() => handleCheckboxChange(student.id)}
                          />
                        </TableCell>
                        <TableCell>{student.name}</TableCell>
                        <TableCell>{student.attendance}%</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>

            {/* Send Notifications Button */}
            <Button
              variant="contained"
              color="primary"
              className="send-button"
              onClick={handleSendNotifications}
            >
              Send Notifications
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* ------------------------ */}
    
      <div className="send-notifications-container">
        <Card className="send-notifications-card-1">
          <CardContent>
            <Typography variant="h4" className="send-notifications-title">
              Parents Queries
            </Typography>

            {/* Attendance Table */}
            <TableContainer component={Paper} className="notifications-table">
              <Table>
              <TableHead>
                    <TableRow>
                        <TableCell>S.No</TableCell>
                        <TableCell>Parent Name</TableCell>
                        <TableCell>Queries</TableCell>
                    </TableRow>
                    </TableHead>

                    <TableBody>
  {students1.map((student) => (
    <TableRow key={student.id}>
      <TableCell>{student.id}</TableCell>
      <TableCell>{student.name}</TableCell>
      <TableCell>{student.queries}</TableCell>
    </TableRow>
  ))}
</TableBody>

              </Table>
            </TableContainer>

          </CardContent>
        </Card>
      </div>

      {/* ----------------------------- */}

      <div className="send-notifications-container">
        <Card className="send-notifications-card-1">
          <CardContent>
            <Typography variant="h4" className="send-notifications-title">
              Student Queries
            </Typography>

            {/* Attendance Table */}
            <TableContainer component={Paper} className="notifications-table">
              <Table>
              <TableHead>
                    <TableRow>
                        <TableCell>S.No</TableCell>
                        <TableCell>student Name</TableCell>
                        <TableCell>Queries</TableCell>
                    </TableRow>
                    </TableHead>

                    <TableBody>
  {students1.map((student) => (
    <TableRow key={student.id}>
      <TableCell>{student.id}</TableCell>
      <TableCell>{student.name}</TableCell>
      <TableCell>{student.queries}</TableCell>
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

export default SendNotificationsPage;
