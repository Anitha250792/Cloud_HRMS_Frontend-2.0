import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../../layouts/AdminLayout";
import { createEmployee } from "../../services/employeeService";
import "./AddEmployee.css";

function AddEmployee() {

  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    emp_code: "",
    name: "",
    email: "",
    department: "",
    role: "",
    salary: "",
    date_joined: "",
  });

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    try {

      await createEmployee(employee);

      alert(
        "Employee Added Successfully"
      );

      navigate("/employees");

    } catch (error) {

      console.log(error);

      alert(
        "Unable to save employee"
      );
    }
  };

  return (
    <AdminLayout>

      <div className="add-page">

        <div className="add-header">

          <h1>Add Employee</h1>

          <button
            className="save-btn"
            onClick={handleSave}
          >
            Save Employee
          </button>

        </div>

        <div className="form-card">

          <h2>Employee Information</h2>

          <div className="form-grid">

            <div>
              <label>Employee Code</label>

              <input
                type="text"
                name="emp_code"
                value={employee.emp_code}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Full Name</label>

              <input
                type="text"
                name="name"
                value={employee.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Email</label>

              <input
                type="email"
                name="email"
                value={employee.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Department</label>

              <select
                name="department"
                value={employee.department}
                onChange={handleChange}
              >
                <option value="">
                  Select Department
                </option>

                <option value="HR">
                  HR
                </option>

                <option value="Finance">
                  Finance
                </option>

                <option value="IT">
                  IT
                </option>
              </select>
            </div>

            <div>
              <label>Role</label>

              <input
                type="text"
                name="role"
                value={employee.role}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Salary</label>

              <input
                type="number"
                name="salary"
                value={employee.salary}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Date Joined</label>

              <input
                type="date"
                name="date_joined"
                value={employee.date_joined}
                onChange={handleChange}
              />
            </div>

          </div>

        </div>

      </div>

    </AdminLayout>
  );
}

export default AddEmployee;