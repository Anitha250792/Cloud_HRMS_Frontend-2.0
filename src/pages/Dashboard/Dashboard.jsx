import { useNavigate } from "react-router-dom";

import AdminLayout from "../../layouts/AdminLayout";

import DashboardStats from "./components/DashboardStats";
import PayrollProgress from "./components/PayrollProgress";
import RecentEmployees from "./components/RecentEmployees";

import QuickActionCard from "../../components/cards/QuickActionCard";
import ProfileCard from "../../components/cards/ProfileCard";
import StatusCard from "../../components/cards/StatusCard";

import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ReceiptIcon from "@mui/icons-material/Receipt";
import PaymentsIcon from "@mui/icons-material/Payments";

import { useEffect, useState } from "react";
import { getDashboardStats } from "../../services/dashboardService";

function Dashboard() {

  const navigate = useNavigate();

  const [stats, setStats] = useState({
  employees: 0,
  pending_leaves: 0,
  approved_leaves: 0,
  rejected_leaves: 0,
});

useEffect(() => {
  loadDashboard();
}, []);

const loadDashboard = async () => {
  try {
    const res = await getDashboardStats();
    setStats(res.data);
  } catch (err) {
    console.log(err);
  }
};

  return (

    <AdminLayout>

      <h1
        style={{
          marginBottom: "25px",
        }}
      >
        Dashboard
      </h1>

      <DashboardStats />

      <PayrollProgress />

      {/* QUICK ACTIONS */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "20px",
          marginTop: "25px",
        }}
      >

        <div
          style={{
            background: "#fff",
            padding: "24px",
            borderRadius: "16px",
          }}
        >

          <h2>Quick Actions</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: "15px",
              marginTop: "20px",
            }}
          >

            <QuickActionCard
              title="Add Employee"
              icon={<PersonAddIcon />}
              color="#4338CA"
              onClick={() =>
                navigate("/employees/add")
              }
            />

            <QuickActionCard
              title="Generate Payslip"
              icon={<ReceiptIcon />}
              color="#10B981"
              onClick={() =>
                navigate("/payslip")
              }
            />

            <QuickActionCard
              title="Process Payroll"
              icon={<PaymentsIcon />}
              color="#F59E0B"
              onClick={() =>
                navigate("/payroll")
              }
            />

          </div>

        </div>

        <ProfileCard />

      </div>

      {/* STATUS CARDS */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "20px",
          marginTop: "25px",
        }}
      >
<StatusCard
 title="Employees"
 value={stats.employees}
 color="#10B981"
/>

<StatusCard
 title="Pending Leaves"
 value={stats.pending_leaves}
 color="#F59E0B"
/>

<StatusCard
 title="Approved"
 value={stats.approved_leaves}
 color="#4338CA"
/>

<StatusCard
 title="Rejected"
 value={stats.rejected_leaves}
 color="#EF4444"
/>

      </div>

      <RecentEmployees />

    </AdminLayout>

  );
}

export default Dashboard;