import { useEffect, useState } from "react";
import { getEmployees } from "../../../services/employeeService";
import "./PayrollProgress.css";

function PayrollProgress() {

  const [generated, setGenerated] =
    useState(0);

  const [pending, setPending] =
    useState(0);

  const [percentage, setPercentage] =
    useState(0);

  useEffect(() => {

    loadData();

  }, []);

  const loadData = async () => {

    try {

      const response =
        await getEmployees();

      const employees =
        response.data;

      const generatedCount =
        employees.filter(
          emp => Number(emp.salary) > 0
        ).length;

      const pendingCount =
        employees.length -
        generatedCount;

      const progress =
        employees.length
          ? Math.round(
              (generatedCount /
                employees.length) *
                100
            )
          : 0;

      setGenerated(
        generatedCount
      );

      setPending(
        pendingCount
      );

      setPercentage(
        progress
      );

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div className="progress-card">

      <h3>
        Payroll Progress
      </h3>

      <p>
        Current Month
      </p>

      <div className="progress-bar">

        <div
          className="progress-fill"
          style={{
            width: `${percentage}%`
          }}
        >
          {percentage}%
        </div>

      </div>

      <div className="progress-info">

        <div>

          <h2>
            {generated}
          </h2>

          <span>
            Generated
          </span>

        </div>

        <div>

          <h2>
            {pending}
          </h2>

          <span>
            Pending
          </span>

        </div>

      </div>

    </div>

  );

}

export default PayrollProgress;