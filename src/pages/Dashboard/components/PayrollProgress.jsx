import "./PayrollProgress.css";

function PayrollProgress() {
  return (
    <div className="progress-card">

      <h3>Payroll Progress</h3>

      <p>January 2026</p>

      <div className="progress-bar">

        <div className="progress-fill">
          75%
        </div>

      </div>

      <div className="progress-info">

        <div>
          <h2>96</h2>
          <span>Generated</span>
        </div>

        <div>
          <h2>32</h2>
          <span>Pending</span>
        </div>

      </div>

    </div>
  );
}

export default PayrollProgress;