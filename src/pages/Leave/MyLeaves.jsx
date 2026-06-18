import { useEffect, useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";

import {
  getMyLeaves,
  getLeaveBalance,
} from "../../services/leaveService";

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

      setLeaves(
        leaveRes.data
      );

      setBalance(
        balanceRes.data
      );

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <AdminLayout>

      <h1>My Leaves</h1>

      {balance && (

        <div
          style={{
            display:"grid",
            gridTemplateColumns:
              "repeat(3,1fr)",
            gap:"20px",
            marginTop:"20px",
            marginBottom:"20px",
          }}
        >

          <div className="leave-card">
            <h3>Casual</h3>
            <h2>
              {
                balance.balance.CASUAL
              }
            </h2>
          </div>

          <div className="leave-card">
            <h3>Sick</h3>
            <h2>
              {
                balance.balance.SICK
              }
            </h2>
          </div>

          <div className="leave-card">
            <h3>Earned</h3>
            <h2>
              {
                balance.balance.EARNED
              }
            </h2>
          </div>

        </div>

      )}

      <div
        className="leave-table-card"
      >

        <table>

          <thead>

            <tr>
              <th>Type</th>
              <th>From</th>
              <th>To</th>
              <th>Status</th>
            </tr>

          </thead>

          <tbody>

            {leaves.map((leave) => (

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
                    className={
                      leave.status.toLowerCase()
                    }
                  >
                    {leave.status}
                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </AdminLayout>

  );
}

export default MyLeaves;