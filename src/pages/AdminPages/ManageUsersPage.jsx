// import React, { useState } from "react";
// import {
//   Button,
//   Card,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogTitle,
//   TextField,
//   Select,
//   MenuItem,
// } from "@mui/material";
// import { Edit, Delete, Add } from "@mui/icons-material";
// import "../../styles/ManageUsersPage.css";
// import AdNav from "./AdNav";

// const ManageUsersPage = () => {
//   // Sample user data
//   const [users, setUsers] = useState([
//     { id: 1, name: "Alice Green", role: "Admin", email: "alice@example.com", status: "Pending" },
//     { id: 2, name: "David Lee", role: "User", email: "david@example.com", status: "Pending" },
//     { id: 3, name: "Sophia Kim", role: "Moderator", email: "sophia@example.com", status: "Pending" },
//     { id: 4, name: "John Doe", role: "User", email: "john@example.com", status: "Pending" },
//   ]);

//   const handleStatusChange = (id) => {
//     setUsers((prevUsers) =>
//       prevUsers.map((user) =>
//         user.id === id
//           ? {
//               ...user,
//               status:
//                 user.status === "Pending"
//                   ? "Unblocked"
//                   : user.status === "Unblocked"
//                   ? "Blocked"
//                   : "Unblocked",
//             }
//           : user
//       )
//     );
//   };



//   return (
//     <>
//     <AdNav/>
//     <div className="manage-users-container">
//       <Card className="manage-users-card">
//         <h2>Manage Users</h2>
//         {/* <Button startIcon={<Add />} variant="contained" className="adbtn" onClick={() => handleOpen()}>
//           Add User
//         </Button> */}
//  <TableContainer>
//       <Table>
//         <TableHead className="manage-user-table">
//           <TableRow>
//             <TableCell sx={{ textAlign: "center" }}>S.No</TableCell>
//             <TableCell sx={{ textAlign: "center" }}>Name</TableCell>
//             <TableCell sx={{ textAlign: "center" }}>Role</TableCell>
//             <TableCell sx={{ textAlign: "center" }}>Email</TableCell>
//             <TableCell sx={{ textAlign: "center" }}>Actions</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {users.map((user) => (
//             <TableRow key={user.id}>
//               <TableCell sx={{ textAlign: "center" }}>{user.id}</TableCell>
//               <TableCell sx={{ textAlign: "center" }}>{user.name}</TableCell>
//               <TableCell sx={{ textAlign: "center" }}>{user.role}</TableCell>
//               <TableCell sx={{ textAlign: "center" }}>{user.email}</TableCell>
//               {/* <TableCell sx={{ textAlign: "center" }}>
//                 <div className="button-container">
//                   {user.status === "Pending" ? (
//                     <>
//                       <Button
//                         onClick={() => handleStatusChange(user.id)}
//                         className="approve-btn"
//                       >
//                         Approve
//                       </Button>
//                       <Button
//                         onClick={() => handleStatusChange(user.id)}
//                         className="reject-btn"
//                       >
//                         Reject
//                       </Button>
//                     </>
//                   ) : (
//                     <>
//                       <Button
//                         onClick={() => handleStatusChange(user.id)}
//                         className={user.status === "Unblocked" ? "block-btn" : "unblock-btn"}
//                       >
//                         {user.status === "Unblocked" ? "Block" : "Unblock"}
//                       </Button>
//                       <Button className="delete-btn">Delete</Button>
//                     </>
//                   )}
//                 </div>
//               </TableCell> */}

// <TableCell sx={{ textAlign: "center" }}>
//   <div className="button-container">
//     {user.status === "Pending" ? (
//       <>
//         {!user.rejected && ( // If not rejected, show Approve button
//           <Button
//             onClick={() => handleStatusChange(user.id, "Unblocked")}
//             className="approve-btn"
//           >
//             Approve
//           </Button>
//         )}
//         <Button
//           onClick={() => handleStatusChange(user.id, "Blocked", true)}
//           className="reject-btn"
//         >
//           Reject
//         </Button>
//       </>
//     ) : (
//       <>
//         <Button
//           onClick={() => handleStatusChange(user.id, user.status === "Unblocked" ? "Blocked" : "Unblocked")}
//           className={user.status === "Unblocked" ? "block-btn" : "unblock-btn"}
//         >
//           {user.status === "Unblocked" ? "Block" : "Unblock"}
//         </Button>
//         <Button className="delete-btn">Delete</Button>
//       </>
//     )}
//   </div>
// </TableCell>

//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//       </Card>

     
//     </div>

//     </>
//   );
// };

// export default ManageUsersPage;



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
} from "@mui/material";
import "../../styles/ManageUsersPage.css";
import AdNav from "./AdNav";

const ManageUsersPage = () => {
  // Sample user data
  const [users, setUsers] = useState([
    { id: 1, name: "Alice Green", role: "Admin", email: "alice@example.com", status: "Pending" },
    { id: 2, name: "David Lee", role: "User", email: "david@example.com", status: "Pending" },
    { id: 3, name: "Sophia Kim", role: "Moderator", email: "sophia@example.com", status: "Pending" },
    { id: 4, name: "John Doe", role: "User", email: "john@example.com", status: "Pending" },
  ]);

  const handleStatusChange = (id, newStatus, isRejected = false) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id
          ? {
              ...user,
              status: isRejected ? "Cancelled" : newStatus,
            }
          : user
      )
    );
  };

  return (
    <>
      <AdNav />
      <div className="manage-users-container">
        <Card className="manage-users-card">
          <h2>Manage Users</h2>
          <TableContainer>
            <Table>
              <TableHead className="manage-user-table">
                <TableRow>
                  <TableCell sx={{ textAlign: "center" }}>S.No</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>Name</TableCell>
                  {/* <TableCell sx={{ textAlign: "center" }}>Role</TableCell> */}
                  <TableCell sx={{ textAlign: "center" }}>Email</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell sx={{ textAlign: "center" }}>{user.id}</TableCell>
                    <TableCell sx={{ textAlign: "center" }}>{user.name}</TableCell>
                    {/* <TableCell sx={{ textAlign: "center" }}>{user.role}</TableCell> */}
                    <TableCell sx={{ textAlign: "center" }}>{user.email}</TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      <div className="button-container">
                        {user.status === "Pending" ? (
                          <>
                            <Button
                              onClick={() => handleStatusChange(user.id, "Unblocked")}
                              className="approve-btn"
                            >
                              Approve
                            </Button>
                            <Button
                              onClick={() => handleStatusChange(user.id, "Cancelled", true)}
                              className="reject-btn"
                            >
                              Reject
                            </Button>
                          </>
                        ) : user.status === "Cancelled" ? (
                          <Button className="cancelled-btn" disabled>
                            Cancelled
                          </Button>
                        ) : (
                          <>
                            <Button
                              onClick={() =>
                                handleStatusChange(user.id, user.status === "Unblocked" ? "Blocked" : "Unblocked")
                              }
                              className={user.status === "Unblocked" ? "block-btn" : "unblock-btn"}
                            >
                              {user.status === "Unblocked" ? "Block" : "Unblock"}
                            </Button>
                            <Button className="delete-btn">Delete</Button>
                          </>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </div>
    </>
  );
};

export default ManageUsersPage;