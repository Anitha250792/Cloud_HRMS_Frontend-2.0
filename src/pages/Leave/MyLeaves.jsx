import { useEffect, useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";

import {
  getMyLeaves,
  getLeaveBalance,
} from "../../services/leaveService";

import "./MyLeaves.css";

function MyLeaves() {

  const [leaves, setLeaves] =
    useState([]);

  const [balance, setBalance] =
    useState(null);

  useEffect(() => {

    loadData();

  }, []);

  const loadData = async () => {

    try {

      const leaveRes =
        await getMyLeaves();

      const balanceRes =
        await getLeaveBalance();

      setLeaves(leaveRes.data);

      setBalance(balanceRes.data);

    } catch (error) {

      console.log(error);

    }

  };

  const approved =
    leaves.filter(
      leave => leave.status === "APPROVED"
    ).length;

  const pending =
    leaves.filter(
      leave => leave.status === "PENDING"
    ).length;

  const rejected =
    leaves.filter(
      leave => leave.status === "REJECTED"
    ).length;

  return (

    <AdminLayout>

      <div className="my-leaves-page">

        <h1>My Leave Requests</h1>

        {/* LEAVE BALANCE */}

        {balance && (

          <div className="leave-balance-grid">

            <div className="leave-card">
              <h4>Casual Leave</h4>
              <h2>{balance.balance.CASUAL}</h2>
            </div>

            <div className="leave-card">
              <h4>Sick Leave</h4>
              <h2>{balance.balance.SICK}</h2>
            </div>

            <div className="leave-card">
              <h4>Earned Leave</h4>
              <h2>{balance.balance.EARNED}</h2>
            </div>

            <div className="leave-card">
              <h4>Unpaid Leave</h4>
              <h2>{balance.balance.UNPAID}</h2>
            </div>

          </div>

        )}

        {/* LEAVE STATS */}

        <div className="leave-stats">

          <div className="stat-card">
            <h4>Total</h4>
            <h2>{leaves.length}</h2>
          </div>

          <div className="stat-card approved">
            <h4>Approved</h4>
            <h2>{approved}</h2>
          </div>

          <div className="stat-card pending">
            <h4>Pending</h4>
            <h2>{pending}</h2>
          </div>

          <div className="stat-card rejected">
            <h4>Rejected</h4>
            <h2>{rejected}</h2>
          </div>

        </div>

        {/* LEAVE HISTORY */}

        <div className="leave-table-card">

          <h2>Leave History</h2>

          <table>

            <thead>

              <tr>
                <th>Leave Type</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Status</th>
              </tr>

            </thead>

            <tbody>

              {leaves.length === 0 ? (

                <tr>

                  <td
                    colSpan="4"
                    style={{
                      textAlign:"center",
                      padding:"20px"
                    }}
                  >
                    No Leave Requests Found
                  </td>

                </tr>

              ) : (

                leaves.map((leave) => (

                  <tr key={leave.id}>

                    <td>
                      {leave.leave_type}
                    </td>

                    <td>
                      {leave.start_date}
                    </td>

                    <td>
                      {leave.end_date}
                    </td>

                    <td>

                      <span
                        className={`status ${leave.status.toLowerCase()}`}
                      >
                        {leave.status}
                      </span>

                    </td>

                  </tr>

                ))

              )}

            </tbody>

          </table>

        </div>

      </div>

    </AdminLayout>

  );

}

export default MyLeaves;