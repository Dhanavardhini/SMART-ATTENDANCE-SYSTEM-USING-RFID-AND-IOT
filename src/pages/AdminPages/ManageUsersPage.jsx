import React, { useState } from "react";
import {
  Button,
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Select,
  MenuItem,
} from "@mui/material";
import { Edit, Delete, Add } from "@mui/icons-material";
import "../../styles/ManageUsersPage.css";
import AdNav from "./AdNav";

const ManageUsersPage = () => {
  // Sample user data
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", role: "Student", email: "john@student.com" },
    { id: 2, name: "Jane Smith", role: "Teacher", email: "jane@teacher.com" },
    { id: 3, name: "Michael Brown", role: "Parent", email: "michael@parent.com" },
  ]);

  // State for Add/Edit Dialog
  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentUser, setCurrentUser] = useState({ id: "", name: "", role: "Student", email: "" });

  // Open dialog for Add or Edit
  const handleOpen = (user = { id: "", name: "", role: "Student", email: "" }) => {
    setCurrentUser(user);
    setEditMode(!!user.id);
    setOpen(true);
  };

  // Close dialog
  const handleClose = () => {
    setOpen(false);
    setCurrentUser({ id: "", name: "", role: "Student", email: "" });
  };

  // Handle form change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentUser((prev) => ({ ...prev, [name]: value }));
  };
  

  // Add or Update User
  const handleSave = () => {
    if (editMode) {
      setUsers(users.map((user) => (user.id === currentUser.id ? currentUser : user)));
    } else {
      setUsers([...users, { ...currentUser, id: users.length + 1 }]);
    }
    handleClose();
  };

  // Delete User
  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  

  return (
    <>
    <AdNav/>
    <div className="manage-users-container">
      <Card className="manage-users-card">
        <h2>Manage Users</h2>
        <Button startIcon={<Add />} variant="contained" color="primary" onClick={() => handleOpen()}>
          Add User
        </Button>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>S.No</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
<TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <Button onClick={() => handleOpen(user)} color="primary">
                      <Edit />
                    </Button>
                    <Button onClick={() => handleDelete(user.id)} color="secondary">
                      <Delete />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>

      {/* Add/Edit Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{editMode ? "Edit User" : "Add User"}</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            margin="dense"
            label="Name"
            name="name"
            value={currentUser.name}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="dense"
            label="Email"
            name="email"
            value={currentUser.email}
            onChange={handleChange}
          />
          <Select
            fullWidth
            margin="dense"
            name="role"
            value={currentUser.role}
            onChange={handleChange}
          >
            <MenuItem value="Student">Student</MenuItem>
            <MenuItem value="Teacher">Teacher</MenuItem>
            <MenuItem value="Parent">Parent</MenuItem>
          </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="error">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            {editMode ? "Update" : "Add"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>

    </>
  );
};

export default ManageUsersPage;
