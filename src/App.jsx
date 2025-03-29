import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from './components/Landing';
import AdminLogin from './components/Admin/AdminLogin';
import TeacherLogin from './components/Teacher/TeacherLogin';
import StudentLogin from './components/Student/StudentLogin';
import ParentLogin from './components/Parent/ParentLogin';
import AdDashboard from './components/Admin/AdDashboard';
import TeacherRegister from './components/Teacher/TeacherRegister';
import StudentRegistration from './components/Student/StudentRegistration';
import ParentRegister from './components/Parent/ParentRegister';
import ManageUsers from './components/Admin/ManageUsers';


const routes = [
  { path: '/', element: <Landing/> },
  { path: '/admin-login', element: <AdminLogin/> },
  { path: '/teacher-login', element: <TeacherLogin/> },
  { path: '/student-login', element: <StudentLogin/> },
  { path: '/parent-login', element: <ParentLogin/> },

//  ------------------------
{ path: '/addashboard', element: <AdDashboard/> },
{path:"/teacherregister", element:<TeacherRegister />},
{path:"/studentregister", element:<StudentRegistration />},
{path:"/parentregister", element:<ParentRegister />},

// --------------------------
{path:"/manage-users", element:<ManageUsers />},


];
export default function App() {  
  return (
    <Router>
      <Routes>
        {routes.map(({ path, element }, index) => (
          <Route key={index} path={path} element={element} />
        ))}
      </Routes>
    </Router>
  );
}
