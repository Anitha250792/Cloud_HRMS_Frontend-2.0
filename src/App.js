import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";

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



<Route
  path="/"
  element={<RoleSelection />}
/>

<Route
  path="/admin-login"
  element={<AdminLogin />}
/>

<Route
  path="/employee-login"
  element={<EmployeeLogin />}
/>

<Route
  path="/register"
  element={<Register />}
/>

<Route
  path="/forgot-password"
  element={<ForgotPassword />}
/>

<Route
  path="/logout"
  element={<Logout />}
/>

        {/* Dashboard */}

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
  path="/employee-dashboard"
  element={<EmployeeDashboard />}
/>

        {/* Employees */}

        <Route
          path="/employees"
          element={<EmployeeList />}
        />

        <Route
          path="/employees/add"
          element={<AddEmployee />}
        />

        <Route
  path="/employees/:id"
  element={<EmployeeDetails />}
/>

        {/* Attendance */}

        <Route
          path="/attendance"
          element={<AttendanceList />}
        />

        {/* Leave */}

        <Route
          path="/leave"
          element={<LeaveManagement />}
        />

        <Route
  path="/apply-leave"
  element={<ApplyLeave />}
/>

<Route
  path="/my-leaves"
  element={<MyLeaves />}
/>

        {/* Payroll */}

        <Route
          path="/payroll"
          element={<PayrollDashboard />}
        />

        {/* Payslip */}

        <Route
          path="/payslip-generation"
          element={<PayslipGeneration />}
        />

        {/* Documents */}

        <Route
          path="/documents"
          element={<Documents />}
        />

        {/* Settings */}

        <Route
          path="/settings"
          element={<Settings />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;