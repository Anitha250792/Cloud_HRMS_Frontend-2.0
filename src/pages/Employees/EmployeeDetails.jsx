import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import AdminLayout from "../../layouts/AdminLayout";

import {
  getEmployee,
  updateEmployee,
} from "../../services/employeeService";

function EmployeeDetails() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  const [employee, setEmployee] =
    useState({
      emp_code: "",
      name: "",
      email: "",
      phone: "",
      gender: "",
      department: "",
      role: "",
      salary: "",
      date_joined: "",
      address: "",
      emergency_contact: "",
      bank_account: "",
      ifsc_code: "",
      status: "Active",
    });

  useEffect(() => {

    const fetchEmployee = async () => {

      try {

        const response =
          await getEmployee(id);

        setEmployee(response.data);

      } catch (error) {

        console.log(error);

        setError(
          "Unable to load employee"
        );

      } finally {

        setLoading(false);

      }

    };

    fetchEmployee();

  }, [id]);

  const handleChange = (e) => {

    setEmployee({
      ...employee,
      [e.target.name]:
      e.target.value,
    });

  };

  const handleUpdate = async () => {

    setError("");

    if (!employee.name) {
      setError(
        "Employee Name is required"
      );
      return;
    }

    if (!employee.email) {
      setError(
        "Email is required"
      );
      return;
    }

    try {

      await updateEmployee(
        id,
        employee
      );

      alert(
        "Employee Updated Successfully"
      );

      navigate("/employees");

    } catch (error) {

      setError(
        error.response?.data?.message ||
        "Failed to update employee."
      );

    }

  };

  if (loading) {

    return (
      <AdminLayout>
        <h2>Loading...</h2>
      </AdminLayout>
    );

  }

  return (

    <AdminLayout>

      <div className="form-card">

        {error && (
          <div className="error-box">
            {error}
          </div>
        )}

        <h1>Employee Profile</h1>

        <p>
          Update employee information
        </p>

        <div className="form-grid">

          <div>
            <label>
              Employee Code
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
            <label>Phone</label>

            <input
              type="text"
              name="phone"
              value={employee.phone || ""}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Gender</label>

            <select
              name="gender"
              value={employee.gender || ""}
              onChange={handleChange}
            >
              <option value="">
                Select Gender
              </option>
              <option value="Male">
                Male
              </option>
              <option value="Female">
                Female
              </option>
            </select>
          </div>

          <div>
            <label>Department</label>

            <input
              type="text"
              name="department"
              value={employee.department}
              onChange={handleChange}
            />
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
              value={
                employee.date_joined || ""
              }
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Emergency Contact</label>

            <input
              type="text"
              name="emergency_contact"
              value={
                employee.emergency_contact || ""
              }
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Bank Account</label>

            <input
              type="text"
              name="bank_account"
              value={
                employee.bank_account || ""
              }
              onChange={handleChange}
            />
          </div>

          <div>
            <label>IFSC Code</label>

            <input
              type="text"
              name="ifsc_code"
              value={
                employee.ifsc_code || ""
              }
              onChange={handleChange}
            />
          </div>

          <div className="full-width">

            <label>Address</label>

            <textarea
              rows="4"
              name="address"
              value={
                employee.address || ""
              }
              onChange={handleChange}
            />

          </div>

        </div>

        <div
          style={{
            marginTop:"30px",
            display:"flex",
            gap:"15px",
          }}
        >

          <button
            className="save-btn"
            onClick={handleUpdate}
          >
            Save Changes
          </button>

          <button
            onClick={() =>
              navigate("/employees")
            }
          >
            Cancel
          </button>

        </div>

      </div>

    </AdminLayout>

  );

}

export default EmployeeDetails;