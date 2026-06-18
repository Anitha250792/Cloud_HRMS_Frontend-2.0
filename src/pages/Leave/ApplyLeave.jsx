import { useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";
import { applyLeave } from "../../services/leaveService";
import "./ApplyLeave.css";

function ApplyLeave() {

  const [form, setForm] = useState({
    leave_type: "",
    start_date: "",
    end_date: "",
    reason: "",
  });

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async () => {

    try {

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
          placeholder="Enter reason for leave..."
          value={form.reason}
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