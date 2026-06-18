import "./Sidebar.css";

import {
  Dashboard,
  People,
  EventAvailable,
  BeachAccess,
  Receipt,
  Description,
  Settings,
  Logout,
  AccountBalanceWallet,
} from "@mui/icons-material";

import { NavLink } from "react-router-dom";

function Sidebar() {

  const role =
    localStorage.getItem("userRole");

  const hrMenu = [
    {
      name: "Dashboard",
      icon: <Dashboard />,
      path: "/dashboard",
    },
    {
      name: "Employees",
      icon: <People />,
      path: "/employees",
    },
    {
      name: "Attendance",
      icon: <EventAvailable />,
      path: "/attendance",
    },
    {
      name: "Leave",
      icon: <BeachAccess />,
      path: "/leave",
    },
    {
      name: "Payroll",
      icon: <AccountBalanceWallet />,
      path: "/payroll",
    },
    {
      name: "Payslip",
      icon: <Receipt />,
      path: "/payslip-generation",
    },
    {
      name: "Documents",
      icon: <Description />,
      path: "/documents",
    },
    {
      name: "Settings",
      icon: <Settings />,
      path: "/settings",
    },
  ];

  const employeeMenu = [
  {
    name: "Dashboard",
    icon: <Dashboard />,
    path: "/employee-dashboard",
  },

  {
    name: "Attendance",
    icon: <EventAvailable />,
    path: "/attendance",
  },

  {
    name: "Apply Leave",
    icon: <BeachAccess />,
    path: "/apply-leave",
  },

  {
    name: "My Leaves",
    icon: <BeachAccess />,
    path: "/my-leaves",
  },

  {
    name: "My Payslip",
    icon: <Receipt />,
    path: "/payslip-generation",
  },

  {
    name: "Documents",
    icon: <Description />,
    path: "/documents",
  },
];

  const menuItems =
    role === "HR"
      ? hrMenu
      : employeeMenu;

  return (
    <div className="sidebar">

      <div>

        <div className="logo-section">

          <h2>PayFlow</h2>

          <p>HR Payroll System</p>

        </div>

        <div className="menu">

          {menuItems.map((item) => (

            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "menu-item active"
                  : "menu-item"
              }
            >
              {item.icon}

              <span>
                {item.name}
              </span>

            </NavLink>

          ))}

        </div>

      </div>

      <NavLink
        to="/logout"
        className="logout-btn"
      >

        <Logout />

        <span>
          Logout
        </span>

      </NavLink>

    </div>
  );
}

export default Sidebar;