import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../../layouts/AdminLayout";
import { createEmployee } from "../../services/employeeService";
import "./AddEmployee.css";

function AddEmployee() {

  const navigate = useNavigate();

  const [error, setError] = useState("");

  const [employee, setEmployee] = useState({
  emp_code: "",
  name: "",
  email: "",
  phone: "",
  gender: "",
  dob: "",
  marital_status: "",
  address: "",
  emergency_contact: "",

  department: "",
  role: "",
  designation: "",
  employment_type: "",
  reporting_manager: "",
  date_joined: "",

  salary: "",

  bank_name: "",
  bank_account: "",
  ifsc_code: "",
  pan_number: "",
  pf_number: "",

  profile_photo: null,
});

  const handleChange = (e) => {

    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });

  };

  const handleImageChange = (e) => {
  setEmployee({
    ...employee,
    profile_photo: e.target.files[0],
  });
};

  const handleSave = async () => {

    setError("");

    if (!employee.emp_code.trim()) {
      setError("Employee Code is required");
      return;
    }

    if (!employee.name.trim()) {
      setError("Employee Name is required");
      return;
    }

    if (!employee.email.trim()) {
      setError("Email is required");
      return;
    }

    if (!employee.department) {
      setError("Department is required");
      return;
    }

    try {

      const formData = new FormData();

Object.keys(employee).forEach((key) => {
  formData.append(key, employee[key]);
});

await createEmployee(formData);

      alert("Employee Added Successfully");

      navigate("/employees");

    } catch (error) {

      console.log(error);

      setError(
        error.response?.data?.message ||
        "Failed to save employee."
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

          {error && (
            <div className="error-box">
              {error}
            </div>
          )}

          <h2>Employee Information</h2>

          <div className="form-grid">

            <div>

              <label>
                Employee Code
                <span className="required">*</span>
              </label>

              <input
                type="text"
                name="emp_code"
                value={employee.emp_code}
                onChange={handleChange}
              />

            </div>

            <div>

              <label>
                Full Name
                <span className="required">*</span>
              </label>

              <input
                type="text"
                name="name"
                value={employee.name}
                onChange={handleChange}
              />

            </div>

            <div>

              <label>
                Email
                <span className="required">*</span>
              </label>

              <input
                type="email"
                name="email"
                value={employee.email}
                onChange={handleChange}
              />

            </div>

            <div>

              <label>
                Department
                <span className="required">*</span>
              </label>

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