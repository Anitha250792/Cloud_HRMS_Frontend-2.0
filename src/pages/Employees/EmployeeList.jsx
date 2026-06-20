import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import AdminLayout from "../../layouts/AdminLayout";

import {
  getEmployees,
  deleteEmployee,
} from "../../services/employeeService";

import "./EmployeeList.css";

function EmployeeList() {

  const navigate = useNavigate();

  const [employees, setEmployees] =
    useState([]);

  const [search, setSearch] =
    useState("");

  const [department, setDepartment] =
    useState("All");

  const fetchEmployees = async () => {

    try {

      const response =
        await getEmployees();

      setEmployees(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {

    fetchEmployees();

  }, []);

  const handleDelete = async (id) => {

    const confirmDelete =
      window.confirm(
        "Delete Employee?"
      );

    if (!confirmDelete) return;

    try {

      await deleteEmployee(id);

      fetchEmployees();

    } catch (error) {

      console.log(error);

    }

  };

  const handleGeneratePayslip = (
    employee
  ) => {

    localStorage.setItem(
      "selectedEmployee",
      JSON.stringify(employee)
    );

    navigate(
      "/payslip-generation"
    );

  };

  const filteredEmployees =
    employees.filter((emp) => {

      const matchesSearch =

        emp.name
          ?.toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||

        emp.emp_code
          ?.toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||

        emp.email
          ?.toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchesDepartment =

        department === "All"
          ? true
          : emp.department ===
            department;

      return (
        matchesSearch &&
        matchesDepartment
      );

    });

  return (

    <AdminLayout>

      <div className="employee-page">

        <div className="employee-header">

          <div>

            <h1>
              Employees
            </h1>

            <p>
              Total Employees :
              {" "}
              {filteredEmployees.length}
            </p>

          </div>

          <button
            className="add-btn"
            onClick={() =>
              navigate(
                "/employees/add"
              )
            }
          >
            + Add Employee
          </button>

        </div>

        <div
          style={{
            display: "flex",
            gap: "15px",
            marginBottom: "20px",
          }}
        >

          <input
            type="text"
            placeholder="Search Employee..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
          />

          <select
            value={department}
            onChange={(e) =>
              setDepartment(
                e.target.value
              )
            }
          >

            <option value="All">
              All Departments
            </option>

            <option value="IT">
              IT
            </option>

            <option value="HR">
              HR
            </option>

            <option value="Finance">
              Finance
            </option>

          </select>

        </div>

        <div className="employee-table-card">

          <table>

            <thead>

              <tr>

                <th>Code</th>
                <th>Name</th>
                <th>Email</th>
                <th>Department</th>
                <th>Role</th>
                <th>Salary</th>
                <th>Status</th>
                <th>Actions</th>

              </tr>

            </thead>

            <tbody>

              {filteredEmployees.length === 0 ? (

                <tr>

                  <td
                    colSpan="8"
                    style={{
                      textAlign:
                        "center",
                    }}
                  >
                    No Records Found
                  </td>

                </tr>

              ) : (

                filteredEmployees.map(
                  (emp) => (

                    <tr key={emp.id}>

                      <td>
                        {emp.emp_code}
                      </td>

                      <td>
                        {emp.name}
                      </td>

                      <td>
                        {emp.email}
                      </td>

                      <td>
                        {emp.department}
                      </td>

                      <td>
                        {emp.role}
                      </td>

                      <td>
                        ₹{emp.salary}
                      </td>

                      <td>

                        <span
                          style={{
                            background:
                              emp.is_active
                                ? "#DCFCE7"
                                : "#FEE2E2",
                            color:
                              emp.is_active
                                ? "#15803D"
                                : "#DC2626",
                            padding:
                              "5px 10px",
                            borderRadius:
                              "20px",
                            fontSize:
                              "12px",
                          }}
                        >
                          {emp.is_active
                            ? "Active"
                            : "Inactive"}
                        </span>

                      </td>

                      <td>

                        <div
                          style={{
                            display:
                              "flex",
                            gap: "8px",
                            flexWrap:
                              "wrap",
                          }}
                        >

                          <button
                            onClick={() =>
                              navigate(
                                `/employees/${emp.id}`
                              )
                            }
                          >
                            View
                          </button>

                          <button
                            onClick={() =>
                              handleGeneratePayslip(
                                emp
                              )
                            }
                          >
                            Payslip
                          </button>

                          <button
                            className="delete-btn"
                            onClick={() =>
                              handleDelete(
                                emp.id
                              )
                            }
                          >
                            Delete
                          </button>

                        </div>

                      </td>

                    </tr>

                  )
                )

              )}

            </tbody>

          </table>

        </div>

      </div>

    </AdminLayout>

  );

}

export default EmployeeList;