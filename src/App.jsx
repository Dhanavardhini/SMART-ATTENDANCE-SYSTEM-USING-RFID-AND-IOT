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
import ManageClasses from './components/Admin/ManageClasses';
import AttendanceReports from './components/Admin/AttendanceReports';
import Notifications from './components/Admin/Notifications';
import TeacherDashboard from './components/Teacher/TeacherDashboard';
import ViewClassAttendance from './components/Teacher/ViewClassAttendance';
import MarkManualAttendance from './components/Teacher/MarkManualAttendance';
import SendNotifications from './components/Teacher/SendNotifications';
import GenerateReports from './components/Teacher/GenerateReports';
import StudentDashboard from './components/Student/StudentDashboard';
import AttendanceHistory from './components/Student/AttendanceHistory';
import StudentNotifications from './components/Student/StudentNotifications';
import AttendanceCorrection from './components/Student/AttendanceCorrection';
import ParentDashboard from './components/Parent/ParentDashboard';
import ParentAttendanceAlerts from './components/Parent/ParentAttendanceAlerts';
import ParentQueries from './components/Parent/ParentQueries';


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
{path:"/manage-classes", element:<ManageClasses/>},
{path:"/attendance-records", element:<AttendanceReports/>},
{path:"/notifications", element:<Notifications/>},

// ------------------------
{path:"/teacherdashboard", element:<TeacherDashboard/>},
{path:"/view-attendance", element:< ViewClassAttendance/>},
{path:"/mark-attendance", element:< MarkManualAttendance/>},
{path:"/send-notifications", element:< SendNotifications/>},
{path:"/generate-reports", element:< GenerateReports/>},
// -------------------
{path:"/studentdashboard", element:< StudentDashboard/>},
{path:"/attendance-history", element:< AttendanceHistory/>},
{path:"/student-notifications", element:< StudentNotifications/>},
{path:"/correction-requests", element:< AttendanceCorrection/>},

// -------------------------

{path:"/parentdashboard", element:< ParentDashboard/>},
{path:"/attendance-alerts", element:<ParentAttendanceAlerts/>},
{path:"/communication", element:<ParentQueries/>},


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
