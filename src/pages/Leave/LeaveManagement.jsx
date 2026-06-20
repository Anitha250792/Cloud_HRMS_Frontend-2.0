import { useEffect, useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";

import {
  getPendingLeaves,
  getMyLeaves,
  approveLeave,
  rejectLeave,
} from "../../services/leaveService";

import "./LeaveManagement.css";

function LeaveManagement() {

  const [leaves, setLeaves] =
    useState([]);

  useEffect(() => {
    fetchLeaves();
  }, []);

  const fetchLeaves = async () => {

  try {

    const response =
      await getMyLeaves();

    setLeaves(response.data);

  } catch (error) {

    console.log(error);

  }

};

  const handleApprove = async (id) => {

    try {

      await approveLeave(id);

      alert("Leave Approved");

      fetchLeaves();

    } catch (error) {

      console.log(error);

    }
  };

  const handleReject = async (id) => {

    try {

      await rejectLeave(id);

      alert("Leave Rejected");

      fetchLeaves();

    } catch (error) {

      console.log(error);

    }
  };

  const approved =
    leaves.filter(
      leave => leave.status === "APPROVED"
    ).length;

  const rejected =
    leaves.filter(
      leave => leave.status === "REJECTED"
    ).length;

  const pending =
    leaves.filter(
      leave => leave.status === "PENDING"
    ).length;

  return (

    <AdminLayout>

      <div className="leave-page">

        <h1>Leave Management</h1>

        <div className="leave-stats">

          <div className="leave-card">
            <h3>Total Requests</h3>
            <h2>{leaves.length}</h2>
          </div>

          <div className="leave-card">
            <h3>Approved</h3>
            <h2>{approved}</h2>
          </div>

          <div className="leave-card">
            <h3>Pending</h3>
            <h2>{pending}</h2>
          </div>

          <div className="leave-card">
            <h3>Rejected</h3>
            <h2>{rejected}</h2>
          </div>

        </div>

        <div className="leave-table-card">

          <h2>Leave Requests</h2>

          <table>

            <thead>

              <tr>
                <th>Employee</th>
                <th>Code</th>
                <th>Leave Type</th>
                <th>From</th>
                <th>To</th>
                <th>Status</th>
                <th>Action</th>
              </tr>

            </thead>

            <tbody>

              {leaves.map((leave) => (

                <tr key={leave.id}>

                  <td>
                    {leave.employee_name}
                  </td>

                  <td>
                    {leave.emp_code}
                  </td>

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
                      className={
                        leave.status.toLowerCase()
                      }
                    >
                      {leave.status}
                    </span>

                  </td>

                  <td>

                    {leave.status ===
                    "PENDING" ? (

                      <>
                        <button
                          className="approve-btn"
                          onClick={() =>
                            handleApprove(
                              leave.id
                            )
                          }
                        >
                          Approve
                        </button>

                        <button
                          className="reject-btn"
                          onClick={() =>
                            handleReject(
                              leave.id
                            )
                          }
                        >
                          Reject
                        </button>
                      </>

                    ) : (

                      "-"
                    )}

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </AdminLayout>

  );
}

export default LeaveManagement;