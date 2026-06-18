import {
  useEffect,
  useState
} from "react";

import {
  useNavigate
} from "react-router-dom";

import AdminLayout from "../../layouts/AdminLayout";

import {
  getEmployees,
  deleteEmployee
} from "../../services/employeeService";

import "./EmployeeList.css";

function EmployeeList() {

  const navigate = useNavigate();

  const [employees, setEmployees] =
    useState([]);

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

    if (
      !window.confirm(
        "Delete Employee?"
      )
    ) {
      return;
    }

    try {

      await deleteEmployee(id);

      fetchEmployees();

    } catch (error) {

      console.log(error);

    }
  };

  return (
    <AdminLayout>

      <div className="employee-page">

        <div className="employee-header">

          <div>

            <h1>Employees</h1>

            <p>
              Manage employee records
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
                <th>Action</th>
              </tr>

            </thead>

            <tbody>

              {employees.map((emp) => (

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
    className="delete-btn"
    onClick={() =>
      handleDelete(emp.id)
    }
  >
    Delete
  </button>

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

export default EmployeeList;