import { useEffect, useState } from "react";
import { jsPDF } from "jspdf";

import AdminLayout from "../../layouts/AdminLayout";

import { getEmployees }
  from "../../services/employeeService";

import "./PayslipGeneration.css";

function PayslipGeneration() {

  const [employees, setEmployees] =
    useState([]);

  const [selectedEmployee,
    setSelectedEmployee] =
    useState("");

  const [month,
    setMonth] =
    useState("");

  const [employeeData,
    setEmployeeData] =
    useState(null);

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

  const handleEmployeeChange = (
    e
  ) => {

    const employeeId =
      e.target.value;

    setSelectedEmployee(
      employeeId
    );

    const employee =
      employees.find(
        emp =>
          emp.id.toString() ===
          employeeId
      );

    setEmployeeData(
      employee
    );
  };

  const generatePDF = () => {

  if (!employeeData || !month) {

    alert(
      "Select Employee and Month"
    );

    return;
  }

  const basicSalary =
    Number(employeeData.salary);

  const hra =
    basicSalary * 0.20;

  const pf =
    basicSalary * 0.12;

  const netSalary =
    basicSalary + hra - pf;

  const doc = new jsPDF();

  doc.setFillColor(
    67,
    56,
    202
  );

  doc.rect(
    0,
    0,
    210,
    35,
    "F"
  );

  doc.setTextColor(
    255,
    255,
    255
  );

  doc.setFontSize(22);

  doc.text(
    "PAYFLOW HRMS",
    20,
    22
  );

  doc.setFontSize(12);

  doc.text(
    "Employee Salary Payslip",
    135,
    22
  );

  doc.setTextColor(
    0,
    0,
    0
  );

  doc.setFontSize(12);

  doc.text(
    `Employee Code : ${employeeData.emp_code}`,
    20,
    55
  );

  doc.text(
    `Employee Name : ${employeeData.name}`,
    20,
    65
  );

  doc.text(
    `Department : ${employeeData.department}`,
    20,
    75
  );

  doc.text(
    `Month : ${month}`,
    20,
    85
  );

  doc.setFillColor(
    240,
    240,
    240
  );

  doc.rect(
    20,
    100,
    170,
    10,
    "F"
  );

  doc.text(
    "Description",
    25,
    107
  );

  doc.text(
    "Amount",
    150,
    107
  );

  doc.text(
    "Basic Salary",
    25,
    125
  );

  doc.text(
    `${basicSalary.toLocaleString()}`,
    150,
    125
  );

  doc.text(
    "HRA (20%)",
    25,
    140
  );

  doc.text(
    `${hra.toLocaleString()}`,
    150,
    140
  );

  doc.text(
    "PF Deduction",
    25,
    155
  );

  doc.text(
    `${pf.toLocaleString()}`,
    150,
    155
  );

  doc.line(
    20,
    165,
    190,
    165
  );

  doc.setTextColor(
    67,
    56,
    202
  );

  doc.setFontSize(16);

  doc.text(
    `Net Salary : ${netSalary.toLocaleString()}`,
    25,
    185
  );

  doc.setTextColor(
    120,
    120,
    120
  );

  doc.setFontSize(10);

  doc.text(
    "This is a system generated payslip.",
    20,
    260
  );

  doc.text(
    "PayFlow HRMS",
    160,
    260
  );

  doc.save(
    `${employeeData.name}-Payslip.pdf`
  );
};

  return (

    <AdminLayout>

      <h1>
        Generate Payslip
      </h1>

      <div
        className="payslip-card"
      >

        <div
          className="form-grid"
        >

          <select
            value={
              selectedEmployee
            }
            onChange={
              handleEmployeeChange
            }
          >

            <option value="">
              Select Employee
            </option>

            {employees.map(
              (emp) => (

                <option
                  key={emp.id}
                  value={emp.id}
                >

                  {emp.emp_code}
                  {" - "}
                  {emp.name}

                </option>

              )
            )}

          </select>

          <input
            type="month"
            value={month}
            onChange={(e) =>
              setMonth(
                e.target.value
              )
            }
          />

        </div>

        {employeeData && (

          <div
            style={{
              marginTop: "25px",
            }}
          >

            <h3>
              Employee Details
            </h3>

            <p>
              Name:
              {" "}
              {employeeData.name}
            </p>

            <p>
              Department:
              {" "}
              {employeeData.department}
            </p>

            <p>
              Salary:
              {" "}
              ₹
              {Number(
                employeeData.salary
              ).toLocaleString()}
            </p>

          </div>

        )}

        <button
          className="generate-btn"
          onClick={
            generatePDF
          }
        >

          Download Payslip PDF

        </button>

      </div>

    </AdminLayout>

  );
}

export default PayslipGeneration;