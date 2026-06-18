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

  const [employee, setEmployee] =
    useState({
      emp_code: "",
      name: "",
      email: "",
      department: "",
      role: "",
      salary: "",
      date_joined: "",
    });

  useEffect(() => {

    const fetchEmployee = async () => {

      try {

        const response =
          await getEmployee(id);

        setEmployee(response.data);

      } catch (error) {

        console.log(error);

        alert(
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

    if (
      !employee.name ||
      !employee.email
    ) {

      alert(
        "Name and Email are required"
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

      console.log(error);

      alert(
        "Unable to update employee"
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

      <div
        style={{
          background: "#fff",
          padding: "30px",
          borderRadius: "16px",
        }}
      >

        <h1>
          Employee Profile
        </h1>

        <p
          style={{
            color: "#6B7280",
            marginBottom: "25px",
          }}
        >
          Update employee information
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(2,1fr)",
            gap: "20px",
          }}
        >

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
            </label>

            <input
              type="text"
              name="department"
              value={employee.department}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>
              Role
            </label>

            <input
              type="text"
              name="role"
              value={employee.role}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>
              Salary
            </label>

            <input
              type="number"
              name="salary"
              value={employee.salary}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>
              Date Joined
            </label>

            <input
              type="date"
              name="date_joined"
              value={
                employee.date_joined || ""
              }
              onChange={handleChange}
            />
          </div>

        </div>

        <div
          style={{
            marginTop: "30px",
            display: "flex",
            gap: "15px",
          }}
        >

          <button
            onClick={handleUpdate}
            style={{
              background: "#4338CA",
              color: "#fff",
              border: "none",
              padding:
                "12px 24px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Save Changes
          </button>

          <button
            onClick={() =>
              navigate("/employees")
            }
            style={{
              background: "#E5E7EB",
              border: "none",
              padding:
                "12px 24px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Cancel
          </button>

        </div>

      </div>

    </AdminLayout>

  );
}

export default EmployeeDetails;