import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import AdminLayout from "../../layouts/AdminLayout";

import { getEmployees } from "../../services/employeeService";

import "./PayrollDashboard.css";

function PayrollDashboard() {

  const navigate = useNavigate();

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

    }

    catch (error) {

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

  const totalHRA =
    grossSalary * 0.20;

  const totalPF =
    grossSalary * 0.12;

  const netSalary =
    grossSalary +
    totalHRA -
    totalPF;

  const processedPayslips =
    employees.filter(
      emp =>
        Number(emp.salary) > 0
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

      <div className="payroll-page">

        <div className="page-header">

          <div>

            <h1>
              Payroll Dashboard
            </h1>

            <p>
              Employee salary processing and payslip generation
            </p>

          </div>

          <button
            className="generate-payroll-btn"
            onClick={() =>
              navigate(
                "/payslip-generation"
              )
            }
          >
            Generate Payslips
          </button>

        </div>

        {/* SUMMARY */}

        <div className="payroll-stats">

          <div className="pay-card">

            <h4>
              Total Employees
            </h4>

            <h2>
              {totalEmployees}
            </h2>

          </div>

          <div className="pay-card">

            <h4>
              Gross Payroll
            </h4>

            <h2>
              ₹
              {grossSalary.toLocaleString()}
            </h2>

          </div>

          <div className="pay-card">

            <h4>
              Net Payroll
            </h4>

            <h2>
              ₹
              {Math.round(
                netSalary
              ).toLocaleString()}
            </h2>

          </div>

          <div className="pay-card">

            <h4>
              Pending Payslips
            </h4>

            <h2>
              {pendingPayslips}
            </h2>

          </div>

        </div>

        {/* PAYROLL BREAKDOWN */}

        <div className="payroll-breakdown">

          <div className="break-card">

            <h3>
              Total Basic Salary
            </h3>

            <h2>
              ₹
              {grossSalary.toLocaleString()}
            </h2>

          </div>

          <div className="break-card">

            <h3>
              HRA (20%)
            </h3>

            <h2>
              ₹
              {Math.round(
                totalHRA
              ).toLocaleString()}
            </h2>

          </div>

          <div className="break-card">

            <h3>
              PF Deduction (12%)
            </h3>

            <h2>
              ₹
              {Math.round(
                totalPF
              ).toLocaleString()}
            </h2>

          </div>

        </div>

        {/* PROGRESS */}

        <div className="payroll-progress">

          <h2>
            Payroll Processing Status
          </h2>

          <div className="progress-bar">

            <div
              className="progress-fill"
              style={{
                width:
                  `${progress}%`,
              }}
            />

          </div>

          <p>
            {progress}% Completed
          </p>

        </div>

        {/* EMPLOYEE TABLE */}

        <div className="employee-payroll-table">

          <h2>
            Employee Payroll Records
          </h2>

          <table>

            <thead>

              <tr>

                <th>
                  Employee Code
                </th>

                <th>
                  Name
                </th>

                <th>
                  Department
                </th>

                <th>
                  Basic Salary
                </th>

                <th>
                  Net Salary
                </th>

                <th>
                  Action
                </th>

              </tr>

            </thead>

            <tbody>

              {employees.length === 0 ? (

                <tr>

                  <td
                    colSpan="6"
                    style={{
                      textAlign:
                        "center",
                    }}
                  >
                    No Employees Found
                  </td>

                </tr>

              ) : (

                employees.map(
                  (emp) => {

                    const salary =
                      Number(
                        emp.salary
                      );

                    const net =
                      salary +
                      salary * 0.20 -
                      salary * 0.12;

                    return (

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
                          {salary.toLocaleString()}
                        </td>

                        <td>
                          ₹
                          {Math.round(
                            net
                          ).toLocaleString()}
                        </td>

                        <td>

                          <button
                            className="view-payslip-btn"
                            onClick={() =>
                              navigate(
                                "/payslip-generation"
                              )
                            }
                          >
                            Generate
                          </button>

                        </td>

                      </tr>

                    );

                  }
                )

              )}

            </tbody>

          </table>

        </div>

      </div>

    </AdminLayout>

  );

}

export default PayrollDashboard;