import { useEffect, useState } from "react";

import AdminLayout from "../../layouts/AdminLayout";
import { getEmployees } from "../../services/employeeService";

import "./PayrollDashboard.css";

function PayrollDashboard() {

  const [employees, setEmployees] =
    useState([]);

  useEffect(() => {

    fetchEmployees();

  }, []);

  const fetchEmployees = async () => {

    try {

      const response =
        await getEmployees();

      setEmployees(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  const totalEmployees =
    employees.length;

  const grossSalary =
    employees.reduce(
      (total, emp) =>
        total +
        Number(emp.salary || 0),
      0
    );

  const netSalary =
    Math.round(
      grossSalary * 0.9
    );

  const processedPayslips =
    employees.filter(
      emp => Number(emp.salary) > 0
    ).length;

  const pendingPayslips =
    totalEmployees -
    processedPayslips;

  const progress =
    totalEmployees
      ? Math.round(
          (
            processedPayslips /
            totalEmployees
          ) * 100
        )
      : 0;

  return (

    <AdminLayout>

      <h1
        style={{
          marginBottom: "25px",
        }}
      >
        Payroll Dashboard
      </h1>

      {/* SUMMARY */}

      <div className="payroll-stats">

        <div className="pay-card">

          <h3>
            Total Employees
          </h3>

          <h2>
            {totalEmployees}
          </h2>

        </div>

        <div className="pay-card">

          <h3>
            Gross Salary
          </h3>

          <h2>
            ₹
            {grossSalary.toLocaleString()}
          </h2>

        </div>

        <div className="pay-card">

          <h3>
            Net Salary
          </h3>

          <h2>
            ₹
            {netSalary.toLocaleString()}
          </h2>

        </div>

        <div className="pay-card">

          <h3>
            Pending Payslips
          </h3>

          <h2>
            {pendingPayslips}
          </h2>

        </div>

      </div>

      {/* PAYROLL PROGRESS */}

      <div
        className="payroll-progress"
      >

        <h2>
          Payroll Processing
        </h2>

        <div
          className="progress-bar"
        >

          <div
            className="progress-fill"
            style={{
              width:
                `${progress}%`,
            }}
          ></div>

        </div>

        <p>
          {progress}% Completed
        </p>

      </div>

      {/* EMPLOYEE TABLE */}

      <div
        style={{
          background: "#fff",
          padding: "24px",
          borderRadius: "16px",
          marginTop: "25px",
        }}
      >

        <h2>
          Employee Payroll
        </h2>

        <table
          style={{
            width: "100%",
            marginTop: "20px",
          }}
        >

          <thead>

            <tr>

              <th>
                Employee Code
              </th>

              <th>
                Employee
              </th>

              <th>
                Department
              </th>

              <th>
                Salary
              </th>

            </tr>

          </thead>

          <tbody>

            {employees.length === 0 ? (

              <tr>

                <td
                  colSpan="4"
                  style={{
                    textAlign: "center",
                    padding: "20px",
                  }}
                >
                  No Records Found
                </td>

              </tr>

            ) : (

              employees.map(
                (emp) => (

                  <tr
                    key={emp.id}
                  >

                    <td>
                      {emp.emp_code}
                    </td>

                    <td>
                      {emp.name}
                    </td>

                    <td>
                      {emp.department}
                    </td>

                    <td>
                      ₹
                      {Number(
                        emp.salary
                      ).toLocaleString()}
                    </td>

                  </tr>

                )
              )

            )}

          </tbody>

        </table>

      </div>

    </AdminLayout>

  );

}

export default PayrollDashboard;