import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";

/* Auth */
import RoleSelection from "./pages/Auth/RoleSelection";
import AdminLogin from "./pages/Auth/AdminLogin";
import EmployeeLogin from "./pages/Auth/EmployeeLogin";
import Register from "./pages/Auth/Register";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import Logout from "./pages/Auth/Logout";

/* Dashboard */
import Dashboard from "./pages/Dashboard/Dashboard";
import EmployeeDashboard from "./pages/EmployeeDashboard/EmployeeDashboard";

/* Employee */
import EmployeeList from "./pages/Employees/EmployeeList";
import AddEmployee from "./pages/Employees/AddEmployee";
import EmployeeDetails from "./pages/Employees/EmployeeDetails";

/* Attendance */
import AttendanceList from "./pages/Attendance/AttendanceList";

/* Leave */
import LeaveManagement from "./pages/Leave/LeaveManagement";
import ApplyLeave from "./pages/Leave/ApplyLeave";
import MyLeaves from "./pages/Leave/MyLeaves";

/* Payroll */
import PayrollDashboard from "./pages/Payroll/PayrollDashboard";

/* Payslip */
import PayslipGeneration from "./pages/Payslip/PayslipGeneration";

/* Documents */
import Documents from "./pages/Documents/Documents";

/* Settings */
import Settings from "./pages/Settings/Settings";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* PUBLIC */}

        <Route path="/" element={<RoleSelection />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/employee-login" element={<EmployeeLogin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/logout" element={<Logout />} />

        {/* HR ROUTES */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute allowedRole="HR">
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/employees"
          element={
            <ProtectedRoute allowedRole="HR">
              <EmployeeList />
            </ProtectedRoute>
          }
        />

        <Route
          path="/employees/add"
          element={
            <ProtectedRoute allowedRole="HR">
              <AddEmployee />
            </ProtectedRoute>
          }
        />

        <Route
          path="/employees/:id"
          element={
            <ProtectedRoute allowedRole="HR">
              <EmployeeDetails />
            </ProtectedRoute>
          }
        />

        <Route
          path="/leave"
          element={
            <ProtectedRoute allowedRole="HR">
              <LeaveManagement />
            </ProtectedRoute>
          }
        />

        <Route
          path="/payroll"
          element={
            <ProtectedRoute allowedRole="HR">
              <PayrollDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/settings"
          element={
            <ProtectedRoute allowedRole="HR">
              <Settings />
            </ProtectedRoute>
          }
        />

        {/* EMPLOYEE ROUTES */}

        <Route
          path="/employee-dashboard"
          element={
            <ProtectedRoute allowedRole="EMPLOYEE">
              <EmployeeDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/attendance"
          element={
            <ProtectedRoute>
              <AttendanceList />
            </ProtectedRoute>
          }
        />

        <Route
          path="/apply-leave"
          element={
            <ProtectedRoute allowedRole="EMPLOYEE">
              <ApplyLeave />
            </ProtectedRoute>
          }
        />

        <Route
          path="/my-leaves"
          element={
            <ProtectedRoute allowedRole="EMPLOYEE">
              <MyLeaves />
            </ProtectedRoute>
          }
        />

        <Route
          path="/payslip-generation"
          element={
            <ProtectedRoute>
              <PayslipGeneration />
            </ProtectedRoute>
          }
        />

        <Route
          path="/documents"
          element={
            <ProtectedRoute>
              <Documents />
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;