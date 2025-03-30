import React, { useState } from "react";
import { Card, CardContent, Typography, Button, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import "../../styles/ManageClassesPage.css";
import AdNav from "./AdNav";

const ManageClassesPage = () => {
  const availableClasses = ["Class 1", "Class 2", "Class 3"];
  const availableTeachers = ["Mr. Smith", "Ms. Johnson", "Dr. Brown"];
  const availableStudents = ["John Doe", "Alice Green", "David Lee", "Sophia Kim"];

  const [selectedClass, setSelectedClass] = useState("");
  const [selectedTeacher, setSelectedTeacher] = useState("");
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [classAssignments, setClassAssignments] = useState([]);

  const handleAssign = () => {
    if (!selectedClass || !selectedTeacher || selectedStudents.length === 0) {
      alert("Please select a class, teacher, and at least one student.");
      return;
    }

    const newAssignment = {
      className: selectedClass,
      teacher: selectedTeacher,
      students: [...selectedStudents],
    };

    setClassAssignments([...classAssignments, newAssignment]);
    setSelectedClass("");
    setSelectedTeacher("");
    setSelectedStudents([]);
  };

  const handleRemoveAssignment = (index) => {
    const updatedAssignments = [...classAssignments];
    updatedAssignments.splice(index, 1);
    setClassAssignments(updatedAssignments);
  };

  return (
    <>
    <AdNav/>
    <div className="manage-classes-container">
      <Card className="manage-classes-card">
        <CardContent>
          <Typography variant="h5" className="manage-classes-title">
            Manage Classes
          </Typography>

          {/* Select Class */}
          <FormControl fullWidth className="form-control" variant="outlined">
          <InputLabel id="demo-simple-select-label">Select Class</InputLabel>
            <Select value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)} placeholder="select class" 
          label="Select Class">
              {availableClasses.map((cls) => (
                <MenuItem key={cls} value={cls}>
                  {cls}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Select Teacher */}
          <FormControl fullWidth className="form-control" variant="outlined">
            <InputLabel >Select Teacher</InputLabel>
            <Select value={selectedTeacher} onChange={(e) => setSelectedTeacher(e.target.value)} placeholder="select  Teacher" 
          label="Select  Teacher">
              {availableTeachers.map((teacher) => (
                <MenuItem key={teacher} value={teacher}>
                  {teacher}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Select Students */}
          <FormControl fullWidth className="form-control" variant="outlined">
            <InputLabel >Select Students</InputLabel>
            <Select
              multiple placeholder="select   Students" 
          label="Select  Students"
              value={selectedStudents}  
              onChange={(e) => setSelectedStudents(e.target.value)}
            >
              {availableStudents.map((student) => (
                <MenuItem key={student} value={student}>
                  {student}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Assign Button */}
          <Button className="assign-button" onClick={handleAssign} >
            Assign Teacher & Students
          </Button>
        </CardContent>
      </Card>

      {/* Display Assigned Classes */}
      <div className="assigned-classes">
        <Typography variant="h6">Assigned Classes</Typography>
        {classAssignments.length === 0 ? (
          <p>No assignments yet.</p>
        ) : (
          classAssignments.map((assignment, index) => (
            <Card key={index} className="assigned-class-card">
              <CardContent>
                <Typography variant="h6">{assignment.className}</Typography>
                <Typography>Teacher: {assignment.teacher}</Typography>
                <Typography>Students: {assignment.students.join(", ")}</Typography>
                <Button className="remove-button" onClick={() => handleRemoveAssignment(index)}>
                  Remove
                </Button>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
    </>
  );
};

export default ManageClassesPage;