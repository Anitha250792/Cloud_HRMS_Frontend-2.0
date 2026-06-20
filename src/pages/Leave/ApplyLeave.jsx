import { useState, useEffect } from "react";
import AdminLayout from "../../layouts/AdminLayout";

import {
  applyLeave,
  getLeaveBalance,
} from "../../services/leaveService";

import "./ApplyLeave.css";

function ApplyLeave() {

  const [balance, setBalance] =
    useState(null);

  const [form, setForm] = useState({
    leave_type: "",
    start_date: "",
    end_date: "",
    reason: "",
  });

  useEffect(() => {

    loadBalance();

  }, []);

  const loadBalance = async () => {

    try {

      const response =
        await getLeaveBalance();

      setBalance(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async () => {

    try {

      if (!form.leave_type) {
        alert("Select Leave Type");
        return;
      }

      if (!form.start_date) {
        alert("Select Start Date");
        return;
      }

      if (!form.end_date) {
        alert("Select End Date");
        return;
      }

      if (
        new Date(form.end_date) <
        new Date(form.start_date)
      ) {
        alert(
          "End Date cannot be before Start Date"
        );
        return;
      }

      if (!form.reason.trim()) {
        alert("Enter Reason");
        return;
      }

      await applyLeave(form);

      alert(
        "Leave Applied Successfully"
      );

      setForm({
        leave_type: "",
        start_date: "",
        end_date: "",
        reason: "",
      });

      loadBalance();

    } catch (error) {

      alert(
        error.response?.data?.error ||
        "Unable to apply leave"
      );

    }

  };

  return (

    <AdminLayout>

      <div className="apply-leave-container">

        <h1 className="leave-title">
          Apply Leave
        </h1>

        <p className="leave-subtitle">
          Submit your leave request for approval
        </p>

        {/* LEAVE BALANCE */}

        <div className="leave-balance-card">

          <h3>Available Leave Balance</h3>

          <div className="balance-grid">

            <div>
              <h4>Casual</h4>
              <p>
                {balance?.balance?.CASUAL ?? 0}
              </p>
            </div>

            <div>
              <h4>Sick</h4>
              <p>
                {balance?.balance?.SICK ?? 0}
              </p>
            </div>

            <div>
              <h4>Earned</h4>
              <p>
                {balance?.balance?.EARNED ?? 0}
              </p>
            </div>

            <div>
              <h4>Unpaid</h4>
              <p>
                {balance?.balance?.UNPAID ?? 0}
              </p>
            </div>

          </div>

        </div>

        {/* FORM */}

        <div className="leave-form">

          <div className="form-group">

            <label>Leave Type</label>

            <select
              name="leave_type"
              value={form.leave_type}
              onChange={handleChange}
            >
              <option value="">
                Select Leave Type
              </option>

              <option value="CASUAL">
                Casual Leave
              </option>

              <option value="SICK">
                Sick Leave
              </option>

              <option value="EARNED">
                Earned Leave
              </option>

              <option value="UNPAID">
                Unpaid Leave
              </option>

            </select>

          </div>

          <div className="date-row">

            <div className="form-group">

              <label>Start Date</label>

              <input
                type="date"
                name="start_date"
                value={form.start_date}
                onChange={handleChange}
              />

            </div>

            <div className="form-group">

              <label>End Date</label>

              <input
                type="date"
                name="end_date"
                value={form.end_date}
                onChange={handleChange}
              />

            </div>

          </div>

          <div className="form-group">

            <label>Reason</label>

            <textarea
              rows="4"
              name="reason"
              value={form.reason}
              placeholder="Enter reason for leave..."
              onChange={handleChange}
            />

          </div>

          <button
            className="leave-btn"
            onClick={handleSubmit}
          >
            Apply Leave
          </button>

        </div>

      </div>

    </AdminLayout>

  );

}

export default ApplyLeave;