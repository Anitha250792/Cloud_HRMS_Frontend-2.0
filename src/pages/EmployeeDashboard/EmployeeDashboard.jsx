import { useEffect, useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";
import "./EmployeeDashboard.css";

import {
  checkIn,
  checkOut,
  getTodayAttendance,
  getAttendanceSummary,
} from "../../services/attendanceService";

function EmployeeDashboard() {

  const [todayAttendance,
    setTodayAttendance] =
    useState(null);

  const [summary,
    setSummary] =
    useState(null);

  useEffect(() => {

    loadDashboard();

  }, []);

  const loadDashboard = async () => {

    try {

      const todayRes =
        await getTodayAttendance();

      setTodayAttendance(
        todayRes.data
      );

      const summaryRes =
        await getAttendanceSummary();

      setSummary(
        summaryRes.data
      );

    } catch (error) {

      console.log(error);

    }

  };

  const handleCheckIn = async () => {

    try {

      await checkIn();

      alert(
        "Check In Successful"
      );

      loadDashboard();

    } catch (error) {

      alert(
        error.response?.data?.error ||
        "Unable to Check In"
      );

    }

  };

  const handleCheckOut = async () => {

    try {

      await checkOut();

      alert(
        "Check Out Successful"
      );

      loadDashboard();

    } catch (error) {

      alert(
        error.response?.data?.error ||
        "Unable to Check Out"
      );

    }

  };

  return (

    <AdminLayout>

      <h1>
        Employee Dashboard
      </h1>

      {/* SUMMARY */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(4,1fr)",
          gap: "20px",
          marginTop: "25px",
        }}
      >

        <div className="dashboard-card">
          <h4>Total Days</h4>
          <h2>
            {summary?.total_days || 0}
          </h2>
        </div>

        <div className="dashboard-card">
          <h4>Worked Days</h4>
          <h2>
            {summary?.worked_days || 0}
          </h2>
        </div>

        <div className="dashboard-card">
          <h4>Attendance</h4>
          <h2>
            {summary
              ? Math.round(
                  (summary.worked_days /
                    (summary.total_days || 1)) *
                    100
                )
              : 0}
            %
          </h2>
        </div>

        <div className="dashboard-card">
          <h4>Status</h4>
          <h2>
            {todayAttendance?.status ||
              "N/A"}
          </h2>
        </div>

      </div>

      {/* TODAY ATTENDANCE */}

      <div
        style={{
          background: "#fff",
          padding: "25px",
          borderRadius: "16px",
          marginTop: "25px",
        }}
      >

        <h2>
          Today's Attendance
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(4,1fr)",
            gap: "20px",
            marginTop: "20px",
          }}
        >

          <div>
            <h4>Status</h4>

            <p>
              {todayAttendance?.status ||
                "Not Marked"}
            </p>
          </div>

          <div>
            <h4>Check In</h4>

            <p>
              {todayAttendance?.check_in
                ? new Date(
                    todayAttendance.check_in
                  ).toLocaleTimeString()
                : "-"}
            </p>
          </div>

          <div>
            <h4>Check Out</h4>

            <p>
              {todayAttendance?.check_out
                ? new Date(
                    todayAttendance.check_out
                  ).toLocaleTimeString()
                : "-"}
            </p>
          </div>

          <div>
            <h4>Working Hours</h4>

            <p>
              {todayAttendance?.working_hours ||
                0}
            </p>
          </div>

        </div>

        <div
          style={{
            marginTop: "25px",
            display: "flex",
            gap: "15px",
          }}
        >

          <button
            onClick={handleCheckIn}
            style={{
              background: "#10B981",
              color: "#fff",
              border: "none",
              padding:
                "12px 25px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Check In
          </button>

          <button
            onClick={handleCheckOut}
            style={{
              background: "#EF4444",
              color: "#fff",
              border: "none",
              padding:
                "12px 25px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Check Out
          </button>

        </div>

      </div>

    </AdminLayout>

  );
}

export default EmployeeDashboard;